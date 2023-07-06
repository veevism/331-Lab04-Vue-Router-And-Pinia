import axios from 'axios'
import type { AxiosInstance, AxiosResponse } from 'axios'
import type { EventItem } from '@/type'

const apiClient: AxiosInstance = axios.create({
  baseURL: 'http://localhost:3004',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getEvent(perPage: number, page: number): Promise<AxiosResponse<EventItem[]>> {
    // perPage is limit
    // page is number of pages
    return apiClient.get<EventItem[]>('/events?_limit=' + perPage + '&_page=' + page)
  },
  getEventById(id : number) : Promise<AxiosResponse<EventItem>>{
    return apiClient.get<EventItem>('events/'+ id.toString())
  }
}
