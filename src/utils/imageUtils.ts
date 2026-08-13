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

  // Handle Cloudinary links
  if (trimmed.includes('cloudinary.com')) {
    if (trimmed.includes('Splendid_Lake_Breez') || trimmed.includes('v1786628007')) {
      return resolveLocalAsset('/splendid-lake-breez-cloudinary.jpg');
    }
  }

  // Handle ImgBB links
  if (trimmed.includes('ibb.co')) {
    if (trimmed.includes('gL2qRM8H') || trimmed.includes('KpP4rjgR') || trimmed.includes('sky-wall')) {
      return resolveLocalAsset('/sky-wall.jpg');
    }
    if (trimmed.includes('vMQ3PcM') || trimmed.includes('sX6KwgX') || trimmed.includes('Splendid-Lake-Breez')) {
      return resolveLocalAsset('/splendid-lake-breez-vmq.jpg');
    }
    if (trimmed.includes('r2SzzBWS') || trimmed.includes('WvwMMrTw') || trimmed.includes('SPLENDID-LAKE-DEWS')) {
      return resolveLocalAsset('/splendid-lake-dews-ibb.jpg');
    }
    if (trimmed.includes('nMH9cTF8') || trimmed.includes('s90nwhZJ') || trimmed.includes('3mD2NwnY') || trimmed.includes('SPLENDID-ELITE')) {
      return resolveLocalAsset('/splendid-elite-ibb.jpg');
    }
    if (trimmed.includes('VcgJLGDq') || trimmed.includes('8LrNmw27') || trimmed.includes('7dnjSDV1') || trimmed.includes('Splendid-Times')) {
      return resolveLocalAsset('/splendid-times-ibb.jpg');
    }
    if (trimmed.includes('HpqFP2g1') || trimmed.includes('gFJjW7gH') || trimmed.includes('plessa')) {
      return resolveLocalAsset('/splendid-plaza-ibb.jpg');
    }
    if (trimmed.includes('FqY2TjVK') || trimmed.includes('QjHLw1df') || trimmed.includes('wrQVmxsR') || trimmed.includes('Skylines')) {
      return resolveLocalAsset('/splendid-skylines-ibb.jpg');
    }
  }

  // Handle Google Drive links by resolving directly to local project assets or high-res Google CDN
  if (trimmed.includes('drive.google.com') || trimmed.includes('googleusercontent.com')) {
    const fileId = extractGoogleDriveFileId(trimmed);
    if (fileId) {
      if (fileId === '1Sz3f7BP5oLVLSc1sHbZLTLkwBsMDuCRM') {
        return resolveLocalAsset('/splendid-lake-dews-drive-2.jpg');
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
      // Convert any other Google Drive link into high-res direct image CDN link working on both mobile & desktop
      return `https://drive.google.com/thumbnail?id=${fileId}&sz=w1600`;
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
 * Reliable image error handler to prevent broken image icons
 */
export function handleImageError(
  e: React.SyntheticEvent<HTMLImageElement, Event>,
  fallback = '/splendid-lake-breez-1.jpg'
) {
  const target = e.currentTarget;
  const currentSrc = target.src || '';

  if (!target.dataset.triedFallback) {
    target.dataset.triedFallback = '1';
    const fileId = extractGoogleDriveFileId(currentSrc);
    if (fileId) {
      target.src = `https://lh3.googleusercontent.com/d/${fileId}=w1600`;
      return;
    }
    target.src = getSafeImageUrl(fallback);
  } else if (target.dataset.triedFallback === '1') {
    target.dataset.triedFallback = '2';
    const fileId = extractGoogleDriveFileId(currentSrc);
    if (fileId) {
      target.src = `https://drive.google.com/uc?export=view&id=${fileId}`;
      return;
    }
    target.src = getSafeImageUrl(fallback);
  } else if (target.dataset.triedFallback === '2') {
    target.dataset.triedFallback = '3';
    target.src = getSafeImageUrl(fallback);
  }
}



