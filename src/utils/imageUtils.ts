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
  if (!url || typeof url !== 'string') {
    return resolveLocalAsset(defaultFallback);
  }
  const trimmed = url.trim();
  if (!trimmed) {
    return resolveLocalAsset(defaultFallback);
  }

  // Handle Google Drive links by resolving directly to local project assets
  if (trimmed.includes('drive.google.com') || trimmed.includes('googleusercontent.com')) {
    const fileId = extractGoogleDriveFileId(trimmed);
    if (fileId === '1Sz3f7BP5oLVLSc1sHbZLTLkwBsMDuCRM') {
      return resolveLocalAsset('/splendid-lake-dews-drive.jpg');
    }
    if (fileId === '1Tr8olVbaSp2j5sA8RrFHi7nvjMluZk-9') {
      return resolveLocalAsset('/splendid-lake-breez-milestone-drive.jpg');
    }
    return resolveLocalAsset(defaultFallback);
  }

  // For external HTTP / HTTPS URLs
  if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) {
    return trimmed;
  }

  return resolveLocalAsset(trimmed);
}

/**
 * Resolves local public asset paths with import.meta.env.BASE_URL and safe URI encoding
 */
function resolveLocalAsset(pathStr: string): string {
  const baseUrl = (import.meta.env && import.meta.env.BASE_URL) || '/';
  const cleanPath = pathStr.startsWith('/') ? pathStr : '/' + pathStr;
  
  if (baseUrl === '/' || baseUrl === './') {
    return encodeURI(cleanPath);
  }
  
  const formattedBase = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;
  return encodeURI(`${formattedBase}${cleanPath}`);
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
    target.src = getSafeImageUrl(fallback);
  }
}



