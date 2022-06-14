export type MessageType = {
    is?: boolean
    id: number
    level: 'success' | 'error' | 'info' | 'warning' | 'warn' | 'loading'
    content: string
}
