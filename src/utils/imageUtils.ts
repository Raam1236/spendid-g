import React from 'react';

/**
 * Extracts Google Drive File ID from any Google Drive sharing, preview, or usercontent URL format
 */
export function extractGoogleDriveFileId(url: string): string | null {
  if (!url) return null;
  
  // Matches file IDs in various Google Drive URL formats:
  // - https://drive.google.com/file/d/FILE_ID/view
  // - https://drive.google.com/open?id=FILE_ID
  // - https://drive.google.com/uc?id=FILE_ID
  // - https://lh3.googleusercontent.com/d/FILE_ID
  // - https://drive.google.com/thumbnail?id=FILE_ID
  const match = url.match(/(?:file\/d\/|id=|lh3\.googleusercontent\.com\/d\/|drive\.google\.com\/thumbnail\?id=)([a-zA-Z0-9_-]{15,})/);
  return match ? match[1] : null;
}

/**
 * Format image URL to ensure proper Google Drive parsing, leading slashes, and URI encoding
 */
export function getSafeImageUrl(url: string | undefined, defaultFallback = '/splendid-lake-breez-1.jpg'): string {
  if (!url || typeof url !== 'string') return defaultFallback;
  const trimmed = url.trim();
  if (!trimmed) return defaultFallback;

  // Automatically detect and transform Google Drive URLs to Netlify-friendly image proxy URLs
  if (trimmed.includes('drive.google.com') || trimmed.includes('googleusercontent.com')) {
    const fileId = extractGoogleDriveFileId(trimmed);
    if (fileId) {
      // Use Google Drive High-Resolution Thumbnail Proxy (bypasses CORS & CORP restrictions on Netlify)
      return `https://drive.google.com/thumbnail?id=${fileId}&sz=w1600`;
    }
  }

  // For other external URLs (http / https), return directly
  if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) {
    return trimmed;
  }

  // Ensure leading slash for local public assets
  const pathWithSlash = trimmed.startsWith('/') ? trimmed : '/' + trimmed;

  // Encode URI to safely handle spaces or special characters
  return encodeURI(pathWithSlash);
}

/**
 * Multi-stage image error handler to prevent broken image icons on Netlify
 */
export function handleImageError(
  e: React.SyntheticEvent<HTMLImageElement, Event>,
  fallback = '/splendid-lake-breez-1.jpg'
) {
  const target = e.currentTarget;
  const currentSrc = target.src || '';

  // Extract file ID if it's a Google Drive link
  const fileId = extractGoogleDriveFileId(currentSrc);

  if (fileId) {
    const stage = target.dataset.driveStage || '0';
    if (stage === '0') {
      target.dataset.driveStage = '1';
      // Try LH3 CDN endpoint
      target.src = `https://lh3.googleusercontent.com/d/${fileId}=s1600`;
      return;
    } else if (stage === '1') {
      target.dataset.driveStage = '2';
      // Try Direct UC export view endpoint
      target.src = `https://drive.google.com/uc?export=view&id=${fileId}`;
      return;
    }
  }

  // Final fallback to clean local luxury image
  if (!target.dataset.triedFallback) {
    target.dataset.triedFallback = 'true';
    target.src = encodeURI(fallback);
  }
}

