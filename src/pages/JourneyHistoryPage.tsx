import React from 'react'

const JourneyHistoryPage: React.FC = () => {
  return (
    <div style={{ padding: '20px', boxSizing: 'border-box' }}>
      <h1>Journey History</h1>
      <div style={{ height: '70vh', background: '#f5f5f5', borderRadius: '8px', marginBottom: '20px' }}>
        <p>Map with route polyline would render here</p>
      </div>
      <p>Journey history with timestamps would display here</p>
    </div>
  )
}

export default JourneyHistoryPage