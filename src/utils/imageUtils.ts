import React from 'react';

/**
 * Format image URL to ensure proper leading slashes and URL encoding
 */
export function getSafeImageUrl(url: string | undefined, defaultFallback = '/splendid-lake-breez-1.jpg'): string {
  if (!url || typeof url !== 'string') return defaultFallback;
  const trimmed = url.trim();
  if (!trimmed) return defaultFallback;

  // For external URLs (http / https), return directly
  if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) {
    return trimmed;
  }

  // Ensure leading slash for local public assets
  const pathWithSlash = trimmed.startsWith('/') ? trimmed : '/' + trimmed;

  // Encode URI to safely handle spaces or special characters
  return encodeURI(pathWithSlash);
}

/**
 * Standard image error handler to prevent broken image icons
 */
export function handleImageError(
  e: React.SyntheticEvent<HTMLImageElement, Event>,
  fallback = '/splendid-lake-breez-1.jpg'
) {
  const target = e.currentTarget;
  if (!target.dataset.triedFallback) {
    target.dataset.triedFallback = 'true';
    
    // Check if Google Drive link and try thumbnail API first
    if (target.src.includes('googleusercontent.com') || target.src.includes('drive.google.com')) {
      const fileIdMatch = target.src.match(/(?:\/d\/|id=)([a-zA-Z0-9_-]+)/);
      if (fileIdMatch && fileIdMatch[1]) {
        target.src = `https://drive.google.com/thumbnail?id=${fileIdMatch[1]}&sz=w1600`;
        return;
      }
    }

    target.src = encodeURI(fallback);
  }
}
