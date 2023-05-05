import type { AxiosResponse } from 'axios/index'

export enum LogLevel {
  DEBUG,
  INFO,
  WARNING,
  ERROR,
  FATAL,
  NONE
}

export type HttpResponse<T> = Promise<AxiosResponse<T>>

export interface SidebarItem {
  icon: string
  title: string
  value: string
  to: string
}

export type SnackbarColor = 'success' | 'error'

export interface Snackbar {
  display: boolean
  color: SnackbarColor
  text: string
  timeout: number
}

export interface SnackbarPayload {
  display?: boolean
  color: SnackbarColor
  text: string
  timeout?: number
}

export interface CounterLog {
  date: string
  type: string
}

export interface LanguageItem {
  title: string
  value: string
}

export interface DessertItem {
  name: string
  calories: number
}

export interface Company {
  name: string
  catchPhrase?: string
  bs?: string
}

export interface Geolocation {
  lat: string
  lng: string
}

export interface Address {
  street: string
  suite: string
  city: string
  zipcode: string
  geo?: Geolocation
}

export interface UserDTO {
  id: string
  name: string
  username: string
  email: string
  phone: string
  website: string
  address: Address
  company: Company
}

export interface UserForm {
  name: string
  username: string
  email: string
  phone: string
  website: string
  address: Address
  company: Company
}

export interface UserUpdatePayload extends UserForm {
  id: string
}

export interface VFormElement extends HTMLElement {
  validate: Function
  reset: Function
  resetValidation: Function
}

export interface WSEvents {
  message: (message: string) => void
}

export interface ChatMessage {
  date: string
  text: string
}

export interface LoginForm {
  email: string
  password: string
}

export interface LoginResponse {
  token: string
}
