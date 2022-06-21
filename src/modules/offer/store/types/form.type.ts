export type FormType = {
    action?: 'create' | 'update' | 'save'
    _id: string
    name: string
    model: string
    type: string
    pay: number
    url: string
    short: string
    isShort?: string
}