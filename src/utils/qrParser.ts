export interface QrParseResult {
  type: 'open-shipment' | 'external-website' | 'plain-id'
  shipmentId?: string
  url?: string
  message?: string
}

export const parseQrCode = (scanned: string, appBaseUrl: string): QrParseResult => {
  if (!scanned || !scanned.trim()) {
    return { type: 'plain-id', shipmentId: undefined }
  }

  const trimmed = scanned.trim()

  // Check if it's a URL
  try {
    const url = new URL(trimmed)
    const origin = url.origin

    // If it's our dashboard URL
    if (origin === appBaseUrl) {
      // Extract ID from pathname or query param
      const pathParts = url.pathname.split('/').filter(Boolean)
      if (pathParts.length > 0) {
        const lastPart = pathParts[pathParts.length - 1]
        // Check if last part is a valid shipment ID (alphanumeric)
        if (/^[a-zA-Z0-9-]+$/.test(lastPart)) {
          return { type: 'open-shipment', shipmentId: lastPart }
        }
      }
      // Try query param
      const idParam = url.searchParams.get('id')
      if (idParam) {
        return { type: 'open-shipment', shipmentId: idParam }
      }
      return { type: 'plain-id', shipmentId: undefined }
    }

    // External URL - warn user
    return {
      type: 'external-website',
      url: trimmed,
      message: `Opening external website: ${origin}`
    }
  } catch {
    // Not a valid URL, treat as plain ID
    return { type: 'plain-id', shipmentId: trimmed }
  }
}