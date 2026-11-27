import axios from 'axios'

const baseURL = import.meta.env.VITE_API_BASE_URL

export const shipments = async () => {
  const res = await axios.get(`${baseURL}/shipments`)
  return res.data
}

export const shipment = async (id: string) => {
  const res = await axios.get(`${baseURL}/shipments/${id}`)
  return res.data
}

export const readings = async (id: string, from?: string, to?: string) => {
  const params = new URLSearchParams()
  if (from) params.append('from', from)
  if (to) params.append('to', to)
  const res = await axios.get(`${baseURL}/shipments/${id}/readings?${params.toString()}`)
  return res.data
}

export const events = async (id: string, from?: string, to?: string) => {
  const params = new URLSearchParams()
  if (from) params.append('from', from)
  if (to) params.append('to', to)
  const res = await axios.get(`${baseURL}/shipments/${id}/events?${params.toString()}`)
  return res.data
}

export const logSearch = async (date?: string, time?: string, shipmentId?: string) => {
  const params = new URLSearchParams()
  if (date) params.append('date', date)
  if (time) params.append('time', time)
  if (shipmentId) params.append('shipmentId', shipmentId)
  const res = await axios.get(`${baseURL}/readings?${params.toString()}`)
  return res.data
}

export const updateLimits = async (
  id: string,
  tempMin?: number,
  tempMax?: number,
  humMin?: number,
  humMax?: number
) => {
  const res = await axios.put(`${baseURL}/shipments/${id}/limits`, {
    tempMin,
    tempMax,
    humMin,
    humMax
  })
  return res.data
}