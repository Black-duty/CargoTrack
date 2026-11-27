import React, { useEffect } from 'react'
import { useSession } from '../contexts/SessionContext'

const LiveMapPage: React.FC = () => {
  const { refreshData } = useSession()

  useEffect(() => {
    refreshData()
  }, [refreshData])

  return (
    <div style={{ height: '100vh', padding: '20px', boxSizing: 'border-box' }}>
      <h1>Live Map</h1>
      <div style={{ height: '50vh', background: '#f5f5f5', borderRadius: '8px', marginBottom: '20px' }}>
        <p>Map with shipment markers would render here</p>
      </div>
      <p>Live data refresh enabled every 30 seconds</p>
    </div>
  )
}

export default LiveMapPage