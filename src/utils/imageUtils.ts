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
  let trimmed = url.trim();
  if (!trimmed) {
    return resolveLocalAsset(defaultFallback);
  }

  // Normalize /images/projects/ or /images/ to root public directory
  if (trimmed.startsWith('/images/projects/')) {
    trimmed = '/' + trimmed.slice('/images/projects/'.length);
  } else if (trimmed.startsWith('/images/')) {
    trimmed = '/' + trimmed.slice('/images/'.length);
  } else if (trimmed.startsWith('images/projects/')) {
    trimmed = '/' + trimmed.slice('images/projects/'.length);
  } else if (trimmed.startsWith('images/')) {
    trimmed = '/' + trimmed.slice('images/'.length);
  }

  // Preserve Vite bundled assets, data URLs, blob URLs, and regenerated image assets directly
  if (trimmed.startsWith('data:') || trimmed.startsWith('blob:') || trimmed.startsWith('/assets/') || trimmed.startsWith('/@') || trimmed.includes('regenerated_image')) {
    return trimmed;
  }

  // Handle Pinterest links
  if (trimmed.includes('pin.it') || trimmed.includes('pinimg.com') || trimmed.includes('pinterest.com')) {
    if (trimmed.includes('7c928fc13a5a84bb1dcadc8b198a450f')) {
      return resolveLocalAsset('/media-article-3-pin.jpg');
    }
    if (trimmed.includes('a8914ca9365a1f6292679be91212f5ac')) {
      return resolveLocalAsset('/media-article-1-pin.jpg');
    }
    if (trimmed.includes('a681b8c57af4a4b5bc4c92d43d5e059b')) {
      return resolveLocalAsset('/splendid-lake-dews-pin.jpg');
    }
    if (trimmed.includes('73d5213658a8964806583dd8bc6bcaad')) {
      return resolveLocalAsset('/splendid-elite-pin.jpg');
    }
    if (trimmed.includes('15fba90ecb282ad3c85a0673e3d9506e')) {
      return resolveLocalAsset('/splendid-plaza-pin.jpg');
    }
    if (trimmed.includes('fb45a92a228c1bfcf642fc281656e47e')) {
      return resolveLocalAsset('/splendid-skywalk-pin.jpg');
    }
    if (trimmed.includes('5dc0b495c1e3509fb6c56ae2b784baaf') || trimmed.includes('933652566522099186')) {
      return resolveLocalAsset('/splendid-times-pin.jpg');
    }
    if (trimmed.includes('9f7dd1571ef3ed72ca84e0659963d882') || trimmed.includes('933652566522099167')) {
      return resolveLocalAsset('/splendid-skylines-pin.jpg');
    }
    if (trimmed.includes('8aa369db346ea347b31fb01a1281e016') || trimmed.includes('2WdKa3gxd') || trimmed.includes('lMcNZIFPh') || trimmed.includes('933652566522099214')) {
      return resolveLocalAsset('/splendid-lake-breez-pin.jpg');
    }
    return resolveLocalAsset('/splendid-lake-breez-pin.jpg');
  }

  // Handle Cloudinary links
  if (trimmed.includes('cloudinary.com')) {
    if (trimmed.includes('v1786628018') || trimmed.includes('9.57.58') || trimmed.includes('WhatsApp_Image_2026-08-09_at_9.57.58')) {
      return resolveLocalAsset('/media-article-3-cloudinary.jpg');
    }
    if (trimmed.includes('v1786628014') || trimmed.includes('9.58.03') || trimmed.includes('WhatsApp_Image_2026-08-09_at_9.58.03')) {
      return resolveLocalAsset('/media-article-1-cloudinary.jpg');
    }
    if (trimmed.includes('v1786628016')) {
      return resolveLocalAsset('/media-article-1-cloudinary.jpg');
    }
    if (trimmed.includes('SPLENDID_LAKE_DEWS') || trimmed.includes('lake_dews') || trimmed.includes('v1786642684')) {
      return resolveLocalAsset('/splendid-lake-dews-cloudinary.jpg');
    }
    if (trimmed.includes('Skylines') || trimmed.includes('skylines') || trimmed.includes('v1786628009')) {
      return resolveLocalAsset('/splendid-skylines-cloudinary.jpg');
    }
    if (trimmed.includes('Splendid_Times') || trimmed.includes('times')) {
      return resolveLocalAsset('/splendid-times-cloudinary.jpg');
    }
    if (trimmed.includes('Splendid_Plaza') || trimmed.includes('plaza')) {
      return resolveLocalAsset('/splendid-plaza-cloudinary.jpg');
    }
    if (trimmed.includes('Splendid_Skywalk') || trimmed.includes('skywalk')) {
      return resolveLocalAsset('/splendid-skywalk-cloudinary.jpg');
    }
    if (trimmed.includes('Splendid_Lake_Breez') || trimmed.includes('68f6b5c0e5e232f588838164fb277271') || trimmed.includes('v1786628007') || trimmed.includes('v1786628012') || trimmed.includes('91cc968b')) {
      return resolveLocalAsset('/splendid-lake-breez-cloudinary.jpg');
    }
    if (trimmed.includes('SPLENDID_ELITE') || trimmed.includes('v1786628008')) {
      return resolveLocalAsset('/splendid-elite-cloudinary.jpg');
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



