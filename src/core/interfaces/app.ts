export type IMessageLevel = 'success' | 'error' | 'info' | 'warning' | 'warn' | 'loading'

export interface IMessage {
    is?: boolean
    id: number
    level: IMessageLevel
    content: string
}

export interface IApp {
    isLoad: boolean
    isError: boolean
    message: IMessage
}