import React, { useEffect, useState } from 'react'
import { useSession } from '../contexts/SessionContext'
import { useParams } from 'react-router-dom'

const ShipmentDetailPage: React.FC = () => {
  const { refreshData } = useSession()
  const { id } = useParams<{ id: string }>()
  const [shipment, setShipment] = useState<any>(null)
  const [readings, setReadings] = useState<any[]>([])
  const [events, setEvents] = useState<any[]>([])

  useEffect(() => {
    refreshData()
  }, [refreshData, id])

  if (!shipment) {
    return <div>Loading shipment details...</div>
  }

  return (
    <div style={{ padding: '20px', boxSizing: 'border-box' }}>
      <h2>
        {shipment.id} - {shipment.cargoType}
        <span className={`status-badge ${shipment.status}`}>
          {shipment.status}
        </span>
      </h2>
      <p>Last data received: {shipment.lastDataReceived ? new Date(shipment.lastDataReceived).toLocaleString() : 'N/A'}</p>

      <p>Shipment ID: {shipment.id}</p>
      <p>Cargo Type: {shipment.cargoType}</p>
      <p>Status: {shipment.status}</p>

      <div style={{ marginTop: '20px' }}>
        <div style={{ float: 'left', width: '50%', paddingRight: '2%' }}>
          <h3>Temperature (10°C - 30°C)</h3>
          <p>Graph placeholder</p>
        </div>
        <div style={{ float: 'right', width: '50%', paddingLeft: '2%' }}>
          <h3>Humidity (30% - 70%)</h3>
          <p>Graph placeholder</p>
        </div>
      </div>

      <div style={{ marginTop: '20px', clear: 'both' }}>
        <h3>Alert Settings</h3>
        <ul>
          <li>Temperature: 10°C - 30°C</li>
          <li>Humidity: 30% - 70%</li>
        </ul>
      </div>

      <div style={{ marginTop: '20px' }}>
        <h3>Past Alerts</h3>
        <ul>
          {events?.map((e, i) => (
            <li key={i}>
              <span>{e.timestamp ? new Date(e.timestamp).toLocaleString() : 'N/A'}</span>
              <span>{e.type}</span>
              <span>{e.value}</span>
            </li>
          )) || <li>No alerts</li>}
        </ul>
      </div>

      <div style={{ marginTop: '20px' }}>
        <h3>Data Received Log</h3>
        <ul>
          {readings?.map((r, i) => (
            <li key={i}>
              <span>{r.timestamp ? new Date(r.timestamp).toLocaleString() : 'N/A'}</span>
              <span>Temp: {r.temperature}</span>
              <span>Hum: {r.humidity}</span>
              <span>Battery: {r.battery}%</span>
            </li>
          )) || <li>No data</li>}
        </ul>
      </div>
    </div>
  )
}

export default ShipmentDetailPage