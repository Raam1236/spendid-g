import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types';
import { Sparkles, X, Send, Bot, User, ArrowRight } from 'lucide-react';

interface ConciergeDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenSiteVisit: (projectName?: string) => void;
}

export const ConciergeDrawer: React.FC<ConciergeDrawerProps> = ({
  isOpen,
  onClose,
  onOpenSiteVisit
}) => {
  if (!isOpen) return null;

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'assistant',
      text: 'Greetings. I am the Splendid AI Concierge. How may I assist your real estate inquiry regarding our developments in Begur, Electronics City, Yelahanka, or Sarjapur Road today?',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      suggestions: [
        'Tell me about Splendid Lake Breez in Begur',
        'Which projects are near Electronics City?',
        'What are the RERA numbers and starting prices?',
        'How do I schedule a site visit with pickup?'
      ]
    }
  ]);

  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSendMessage = async (textToSend?: string) => {
    const query = textToSend || inputText;
    if (!query.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputText('');
    setIsTyping(true);

    try {
      const res = await fetch('/api/concierge', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: query,
          conversationHistory: messages
        })
      });

      const data = await res.json();
      const assistantMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'assistant',
        text: data.reply || 'Thank you. Our luxury team is available for private site tours and brochure dispatch.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        suggestions: ['Schedule site visit now', 'View project locations']
      };

      setMessages((prev) => [...prev, assistantMsg]);
    } catch (err) {
      console.error(err);
      const fallbackMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'assistant',
        text: 'Splendid Group offers premier properties across Begur, Electronics City, Sarjapur, and Yelahanka. Would you like to schedule a chauffeured site visit?',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, fallbackMsg]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex justify-end animate-fade-in">
      <div className="bg-[#1A1A1A] text-white w-full max-w-lg h-full border-l border-white/10 flex flex-col justify-between shadow-2xl relative">
        
        {/* Drawer Header */}
        <div className="p-4 sm:p-6 border-b border-white/10 flex items-center justify-between bg-[#242424] shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 border border-[#C5A059] text-[#C5A059] bg-[#1A1A1A]">
              <Sparkles className="w-5 h-5 text-[#C5A059]" />
            </div>
            <div>
              <h3 className="font-serif italic text-lg sm:text-xl text-white font-normal" style={{ fontFamily: "'Georgia', serif" }}>Splendid AI Concierge</h3>
              <p className="text-[10px] font-sans tracking-widest text-[#C5A059] uppercase font-bold">
                BENGALURU REAL ESTATE ADVISOR
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 text-white/70 hover:text-white transition-colors bg-white/10 rounded-full active:scale-95"
            aria-label="Close concierge"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Messages Stream */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.sender === 'assistant' && (
                <div className="w-7 h-7 rounded-none bg-[#242424] border border-[#C5A059] text-[#C5A059] flex items-center justify-center shrink-0 mt-1">
                  <Bot className="w-4 h-4 text-[#C5A059]" />
                </div>
              )}

              <div className={`max-w-[82%] space-y-2 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                <div
                  className={`p-4 text-xs font-sans leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-[#C5A059] text-[#1A1A1A] font-bold'
                      : 'bg-[#242424] border border-white/10 text-white/90'
                  }`}
                >
                  {msg.text}
                </div>

                {/* Suggestions Pills */}
                {msg.suggestions && msg.suggestions.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-2">
                    {msg.suggestions.map((sug, i) => (
                      <button
                        key={i}
                        onClick={() => {
                          if (sug.toLowerCase().includes('schedule site visit')) {
                            onClose();
                            onOpenSiteVisit();
                          } else {
                            handleSendMessage(sug);
                          }
                        }}
                        className="text-[10px] font-sans bg-[#242424] hover:bg-[#333333] text-[#C5A059] border border-white/10 px-3 py-1.5 transition-all text-left flex items-center gap-1 font-semibold"
                      >
                        <span>{sug}</span>
                        <ArrowRight className="w-3 h-3 text-[#C5A059]" />
                      </button>
                    ))}
                  </div>
                )}

                <span className="text-[9px] text-white/50 font-mono block">
                  {msg.timestamp}
                </span>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex items-center gap-2 text-xs text-[#C5A059] italic font-sans pl-10">
              <Sparkles className="w-3.5 h-3.5 animate-spin text-[#C5A059]" />
              <span>Splendid Concierge is formulating response...</span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Drawer Input Bar */}
        <div className="p-4 bg-[#242424] border-t border-white/10">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              placeholder="Ask about Lake Breez, Skywalk, floor plans, RERA..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="flex-1 bg-[#1A1A1A] border border-white/10 focus:border-[#C5A059] text-white px-4 py-3 text-xs focus:outline-none transition-all"
            />
            <button
              type="submit"
              disabled={!inputText.trim()}
              className="bg-[#C5A059] text-[#1A1A1A] p-3 disabled:opacity-40 hover:bg-white transition-colors font-bold border border-[#C5A059]"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

