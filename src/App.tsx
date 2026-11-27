import { Routes, Route } from 'react-router-dom'
import LiveMapPage from './pages/LiveMapPage'
import ShipmentsPage from './pages/ShipmentsPage'
import ShipmentDetailPage from './pages/ShipmentDetailPage'
import JourneyHistoryPage from './pages/JourneyHistoryPage'
import LogsPage from './pages/LogsPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LiveMapPage />} />
      <Route path="shipments" element={<ShipmentsPage />} />
      <Route path="shipments/:id" element={<ShipmentDetailPage />} />
      <Route path="journey-history" element={<JourneyHistoryPage />} />
      <Route path="logs" element={<LogsPage />} />
    </Routes>
  )
}

export default App