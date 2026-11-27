# CargoTrack Dashboard

IoT cargo tracking dashboard for ESP32-based shipment monitoring devices.

## Tech Stack
- React + Vite + TypeScript
- React Router for navigation
- Leaflet with OpenStreetMap tiles for maps
- Recharts for graphs
- html5-qrcode for camera-based QR scanning

## Environment Variables

Create a `.env` file in the root with:

```
VITE_API_BASE_URL=http://localhost:5000
VITE_APP_BASE_URL=http://localhost:5173
```

- `VITE_API_BASE_URL`: Base URL of the backend API
- `VITE_APP_BASE_URL`: The dashboard's own public URL, used to recognize QR codes that belong to this system

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:5173
```

## Vercel Deployment

1. Push this repository to GitHub
2. Import the project in Vercel
3. Set environment variables in Vercel Dashboard:
   - `VITE_API_BASE_URL`: Your backend API URL (e.g., `https://your-api.vercel.app`)
   - `VITE_APP_BASE_URL`: Your Vercel URL (e.g., `https://cargotrack.vercel.app`)
4. Vercel will auto-detect the Vite framework
5. Deploy

## Build Command
```
npm run build
```

Output directory: `dist`

## Pages

- **Live Map** (`/`): Home page with map showing all shipment markers
- **Shipments** (`/shipments`): List of shipments with search and filter
- **Shipment Detail** (`/shipments/:id`): Detailed view with maps, graphs, and alerts
- **Journey History** (`/journey-history`): Route polyline and timestamp exploration
- **Logs** (`/logs`): Complete reading and event log

## QR Code Scanning

- Dashboard URLs are auto-recognized and open the corresponding shipment
- External URLs show a warning before opening
- Plain IDs are treated as shipment IDs
- Manual entry field available as camera fallback

## Status Colors
- Green: normal
- Amber: warning  
- Red: alert
- Gray: offline

## Refresh
- Auto-refresh every 30 seconds
- Manual refresh button available