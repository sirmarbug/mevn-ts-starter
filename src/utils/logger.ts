import { LogLevel } from '@/types'
import dayjs from 'dayjs'

const logLevel: LogLevel = import.meta.env.VITE_LOG_LEVEL

export const debug = (message: string, ...args: unknown[]) => {
  if (logLevel > LogLevel.DEBUG) {
    return
  }
  const now = dayjs().format('DD-MM-YYYY HH:mm:ss')
  console.groupCollapsed(`[${now}] - ${message}`)
  args.forEach((arg) => {
    console.log(arg)
  })
  console.groupEnd()
}

export const info = (message: string, ...args: unknown[]) => {
  if (logLevel > LogLevel.INFO) {
    return
  }
  const now = dayjs().format('DD-MM-YYYY HH:mm:ss')
  console.groupCollapsed(`%c[${now}] - ${message}`, 'color: #4285F4')
  args.forEach((arg) => {
    console.info(arg)
  })
  console.groupEnd()
}

export const warn = (message: string, ...args: unknown[]) => {
  if (logLevel > LogLevel.WARNING) {
    return
  }
  const now = dayjs().format('DD-MM-YYYY HH:mm:ss')
  console.groupCollapsed(`%c[${now}] - ${message}`, 'color: #F4B400')
  args.forEach((arg) => {
    console.warn(arg)
  })
  console.groupEnd()
}

export const error = (message: string, ...args: unknown[]) => {
  if (logLevel > LogLevel.ERROR) {
    return
  }
  const now = dayjs().format('DD-MM-YYYY HH:mm:ss')
  console.groupCollapsed(`%c[${now}] - ${message}`, 'color: #DB4437')
  args.forEach((arg) => {
    console.error(arg)
  })
  console.groupEnd()
}

export const fatal = (message: string, ...args: unknown[]) => {
  if (logLevel > LogLevel.FATAL) {
    return
  }
  const now = dayjs().format('DD-MM-YYYY HH:mm:ss')
  console.groupCollapsed(`%c!!![${now}] - ${message}`, 'color: #DB4437')
  args.forEach((arg) => {
    console.error(arg)
  })
  console.groupEnd()
}
