/// <reference types="vite/client" />
import { LogLevel } from '@/types'

interface ImportMetaEnv {
  readonly VITE_API_URL: string
  readonly VITE_WS_URL: string
  readonly VITE_LOG_LEVEL: LogLevel
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
