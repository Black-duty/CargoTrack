import React from 'react'

interface SidebarProps {
  activePage: string
  setActivePage: (page: string) => void
  onScanClick: () => void
}

export const Sidebar: React.FC<SidebarProps> = ({ activePage, setActivePage, onScanClick }) => {
  return (
    <nav className="sidebar">
      <ul>
        <li
          className="sidebar-item"
          onClick={() => setActivePage('live-map')}
          style={{ fontWeight: activePage === 'live-map' ? 600 : 400 }}
        >
          Live Map
        </li>
        <li
          className="sidebar-item"
          onClick={() => setActivePage('shipments')}
          style={{ fontWeight: activePage === 'shipments' ? 600 : 400 }}
        >
          Shipments
        </li>
        <li
          className="sidebar-item"
          onClick={onScanClick}
          style={{ fontWeight: activePage === 'scan-qr' ? 600 : 400 }}
        >
          Scan QR
        </li>
        <li
          className="sidebar-item"
          onClick={() => setActivePage('logs')}
          style={{ fontWeight: activePage === 'logs' ? 600 : 400 }}
        >
          Logs
        </li>
      </ul>
    </nav>
  )
}