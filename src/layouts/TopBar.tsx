import React from 'react'

export const TopBar: React.FC = () => {
  return (
    <header className="topbar">
      <h1>CargoTrack</h1>
      <div>
        <button>Refresh</button>
        <span style={{ marginLeft: '10px' }}>Last refreshed: --</span>
      </div>
    </header>
  )
}