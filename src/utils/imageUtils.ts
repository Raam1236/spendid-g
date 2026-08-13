import React from 'react';

/**
 * Extracts Google Drive File ID from any Google Drive sharing or preview URL
 */
export function extractGoogleDriveFileId(url: string): string | null {
  if (!url) return null;
  const match = url.match(/(?:file\/d\/|[\?&]id=|googleusercontent\.com\/d\/|thumbnail\?id=|drive\.google\.com\/d\/)([a-zA-Z0-9_-]{15,})/);
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

  // Handle Google Drive links by resolving directly to local project assets or high-res Google CDN
  if (trimmed.includes('drive.google.com') || trimmed.includes('googleusercontent.com')) {
    const fileId = extractGoogleDriveFileId(trimmed);
    if (fileId) {
      if (fileId === '1Sz3f7BP5oLVLSc1sHbZLTLkwBsMDuCRM') {
        return resolveLocalAsset('/splendid-lake-dews-drive.jpg');
      }
      if (fileId === '1Tr8olVbaSp2j5sA8RrFHi7nvjMluZk-9') {
        return resolveLocalAsset('/splendid-lake-breez-milestone-drive.jpg');
      }
      if (fileId === '1Bf8dotLV7yJONb8L7DEFmtGaMEUnVJt3') {
        return resolveLocalAsset('/splendid-about-brand.jpg');
      }
      if (fileId === '1bc2Q_PmRE_roZhYD_YQwuU5CPwN7C_-h') {
        return resolveLocalAsset('/splendid-elite-drive-2.jpg');
      }
      if (fileId === '1yNNsIXGDN87wJAaiIWjm0esWuXrEcr4W') {
        return resolveLocalAsset('/splendid-skywalk-drive-2.jpg');
      }
      if (fileId === '1U-2bp7-cxVoQtpX-RZF_scoD4vLatsEr') {
        return resolveLocalAsset('/splendid-plaza-drive-2.jpg');
      }
      if (fileId === '10htyQwZDS5EJuGn_9fT5LnlJmN1MnUNA') {
        return resolveLocalAsset('/splendid-times-drive-2.jpg');
      }
      if (fileId === '1-SN1AUdiRws9r5sr2gyHeJsyOT9lxhMj') {
        return resolveLocalAsset('/splendid-skylines-drive-2.jpg');
      }
      if (fileId === '1_6_rwHwVFoo03PvTzFGb-0d12mdoBknn') {
        return resolveLocalAsset('/splendid-real-estate-trends-drive.jpg');
      }
      if (fileId === '1Sz3f7BP5oLVLSc1sHbZLTLkwBsMDuCRM') {
        return resolveLocalAsset('/splendid-lake-dews-drive-2.jpg');
      }
      // Convert any other Google Drive link into high-res direct image CDN link working on both mobile & desktop
      return `https://lh3.googleusercontent.com/d/${fileId}=w1600`;
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



