import React, { createContext, useContext, useState, useEffect } from 'react'

interface SessionContextProps {
  apiBaseUrl: string | undefined
  appBaseUrl: string | undefined
  status: 'idle' | 'loading' | 'error' | 'success'
  setStatus: (status: 'idle' | 'loading' | 'error' | 'success') => void
  refreshData: () => Promise<void>
  children: React.ReactNode
}

const SessionContext = createContext<SessionContextProps | undefined>(undefined)

export const useSession = (): SessionContextProps => {
  const context = useContext(SessionContext)
  if (!context) {
    throw new Error('useSession must be used within a SessionProvider')
  }
  return context
}

export const SessionProvider: React.FC<{
  apiBaseUrl: string | undefined
  appBaseUrl: string | undefined
  children: React.ReactNode
}> = ({ apiBaseUrl, appBaseUrl, children }) => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'error' | 'success'>('idle')

  const refreshData = async () => {
    setStatus('loading')
    try {
      await Promise.resolve()
      setStatus('success')
    } catch (e) {
      setStatus('error')
    }
  }

  // Auto-refresh every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      refreshData()
    }, 30000)
    return () => clearInterval(interval)
  }, [])

  return (
    <SessionContext.Provider value={{ apiBaseUrl, appBaseUrl, status, setStatus, refreshData, children }}>
      {children}
    </SessionContext.Provider>
  )
}