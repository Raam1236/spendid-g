import React from 'react';

/**
 * Extracts Google Drive File ID from any Google Drive sharing or preview URL
 */
export function extractGoogleDriveFileId(url: string): string | null {
  if (!url) return null;
  const match = url.match(/(?:file\/d\/|id=|lh3\.googleusercontent\.com\/d\/|drive\.google\.com\/thumbnail\?id=)([a-zA-Z0-9_-]{15,})/);
  return match ? match[1] : null;
}

/**
 * Format image URL to ensure proper local asset paths and safe URI encoding on Netlify
 */
export function getSafeImageUrl(url: string | undefined, defaultFallback = '/splendid-lake-breez-1.jpg'): string {
  if (!url || typeof url !== 'string') return defaultFallback;
  const trimmed = url.trim();
  if (!trimmed) return defaultFallback;

  // If a legacy Google Drive URL is passed, map it safely to a local project asset
  if (trimmed.includes('drive.google.com') || trimmed.includes('googleusercontent.com')) {
    return defaultFallback;
  }

  // For external HTTP / HTTPS URLs
  if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) {
    return trimmed;
  }

  // Ensure leading slash for local public assets
  const pathWithSlash = trimmed.startsWith('/') ? trimmed : '/' + trimmed;

  // Encode URI to safely handle spaces or special characters on Netlify
  return encodeURI(pathWithSlash);
}

/**
 * Reliable image error handler to prevent broken image icons on Netlify
 */
export function handleImageError(
  e: React.SyntheticEvent<HTMLImageElement, Event>,
  fallback = '/splendid-lake-breez-1.jpg'
) {
  const target = e.currentTarget;
  
  if (!target.dataset.triedFallback) {
    target.dataset.triedFallback = 'true';
    target.src = encodeURI(fallback);
  }
}


