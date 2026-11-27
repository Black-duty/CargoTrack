import React, { useEffect, useState } from 'react'
import { useSession } from '../contexts/SessionContext'

const ShipmentsPage: React.FC = () => {
  const { refreshData } = useSession()
  const [shipments, setShipments] = useState<any[]>([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    refreshData()
  }, [refreshData])

  return (
    <div style={{ padding: '20px', boxSizing: 'border-box' }}>
      <h1>Shipments</h1>
      <input
        type="text"
        placeholder="Search shipments..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: '8px', marginBottom: '20px', width: '100%', maxWidth: '400px' }}
      />
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Shipment ID</th>
            <th>Cargo Type</th>
            <th>Status</th>
            <th>Last Update</th>
          </tr>
        </thead>
        <tbody>
          {shipments.map((s) => (
            <tr key={s.id} style={{ borderBottom: '1px solid #eee' }}>
              <td>{s.id}</td>
              <td>{s.cargoType}</td>
              <td>
                <span className={`status-badge ${s.status}`}>{s.status}</span>
              </td>
              <td>{s.lastDataReceived ? new Date(s.lastDataReceived).toLocaleString() : 'N/A'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ShipmentsPage