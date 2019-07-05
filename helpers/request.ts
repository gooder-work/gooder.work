import axios, { AxiosRequestConfig } from 'axios'

export const request = async (method: string, endpoint: string, data?: any)=> {
  const response = await axios({
    method,
    url: `${process.env.NODE_ENV === 'production' ? '' : '//localhost:5000'}/${endpoint}`,
    withCredentials: true,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    responseType: 'json',
    data: data ? JSON.stringify(data) : undefined
  } as AxiosRequestConfig)
  return response.data
}