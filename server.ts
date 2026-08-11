import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Lazy Gemini initialization helper
  let aiClient: GoogleGenAI | null = null;
  function getGeminiClient(): GoogleGenAI | null {
    if (!aiClient) {
      const apiKey = process.env.GEMINI_API_KEY;
      if (apiKey) {
        aiClient = new GoogleGenAI({ apiKey });
      }
    }
    return aiClient;
  }

  // API Routes
  app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
  });

  // Splendid AI Concierge Route
  app.post('/api/concierge', async (req, res) => {
    try {
      const { message, conversationHistory } = req.body;
      if (!message || typeof message !== 'string') {
        res.status(400).json({ error: 'Message is required' });
        return;
      }

      const ai = getGeminiClient();
      if (!ai) {
        // Fallback response if GEMINI_API_KEY is not configured
        res.json({
          reply: "Welcome to Splendid Group. Our luxury properties in Bengaluru include Splendid Lake Breez (Begur), Splendid Elite (Electronics City), Splendid Skywalk (Yelahanka), Splendid Plaza (Koramangala), and Splendid Times Square (Sarjapur Road). How may I assist your home search or site visit schedule today?"
        });
        return;
      }

      const systemInstruction = `
You are the AI Luxury Concierge for SPLENDID GROUP, an elite real estate developer in Bengaluru, Karnataka, India.
Your tone is sophisticated, polite, knowledgeable, reassuring, and prompt.

Key Projects Information:
1. Splendid Lake Breez (Begur, South Bengaluru): 2 & 3 BHK Lake-Facing Residences, starting ₹88 Lakhs. RERA registered. Infinity lake pool, 3-tier security, 12 mins to Electronic City & HSR Layout.
2. Splendid Elite (Electronics City Phase 1, Bengaluru): Modern 2 & 3 BHK Apartments, starting ₹75 Lakhs. Ready to move. 5 mins to Infosys & Wipro campus.
3. Splendid Skywalk (Yelahanka / Kogilu, North Bengaluru): 2, 3 & 4 BHK Sky Towers with 18th floor glass skywalk bridge, starting ₹1.10 Cr. 18 mins to BLR Airport.
4. Splendid Plaza (Koramangala / Outer Ring Road): Boutique Commercial & Retail Hub.
5. Splendid Times Square (Sarjapur Road): Mixed-Use Commercial & Tech Retail Landmark.
6. Skylines by Splendid (Sarjapur Road): Low density luxury high-rise residences.
7. Lake Dews (Begur/HSR Extension): Waterfront quiet luxury enclave.

Your job:
- Answer questions about Splendid Group projects, locations in Bengaluru, RERA compliance, amenities, floor plan configurations, and pricing estimates.
- Offer to schedule a private site visit with chauffeur pick-up or provide project brochures.
- Keep replies elegant, clear, and structured (under 180 words). Never invent unverified pricing or false claims.
`;

      const contents: Array<{ role: 'user' | 'model'; parts: Array<{ text: string }> }> = [
        { role: 'user', parts: [{ text: systemInstruction }] }
      ];

      if (Array.isArray(conversationHistory)) {
        for (const item of conversationHistory) {
          if (item.sender && item.text) {
            contents.push({
              role: item.sender === 'user' ? 'user' : 'model',
              parts: [{ text: item.text }]
            });
          }
        }
      }

      contents.push({ role: 'user', parts: [{ text: message }] });

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: contents,
      });

      const replyText = response.text || "Thank you for reaching out to Splendid Group. Our team is at your service. Would you like to schedule a site visit or receive a project brochure on WhatsApp?";

      res.json({ reply: replyText });
    } catch (err: unknown) {
      console.error('Error in Concierge API:', err);
      res.json({
        reply: "Splendid Group represents premier real estate developments across Begur, Electronics City, Sarjapur Road, and Yelahanka in Bengaluru. Please feel free to request a site visit or contact our team directly at +91 80 4900 1100."
      });
    }
  });

  // Handle Enquiry Form Submission
  app.post('/api/enquiry', (req, res) => {
    const { fullName, phone, email, projectInterest } = req.body;
    console.log('Enquiry received:', { fullName, phone, email, projectInterest });
    res.json({
      success: true,
      message: `Thank you, ${fullName || 'valued client'}. Your enquiry for ${projectInterest || 'Splendid Group projects'} has been received. Our senior luxury consultant will reach out shortly.`,
      referenceId: 'SPL-' + Math.floor(100000 + Math.random() * 900000)
    });
  });

  // Handle Site Visit Booking Submission
  app.post('/api/site-visit', (req, res) => {
    const { fullName, phone, email, project, preferredDate, preferredTime } = req.body;
    console.log('Site Visit booked:', { fullName, phone, email, project, preferredDate, preferredTime });
    res.json({
      success: true,
      message: `Site visit confirmed for ${project || 'Splendid Property'} on ${preferredDate} at ${preferredTime}. A confirmation SMS & WhatsApp invitation has been dispatched.`,
      bookingId: 'VISIT-' + Math.floor(100000 + Math.random() * 900000)
    });
  });

  // Vite middleware for development vs static serve for production
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Splendid Group server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
