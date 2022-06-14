export type FormType = {
    action?: 'create' | 'update'
    _id: string
    offer: string
    model: string
    title: string
    description: string
    url: string
    short: string
    isShort?: string
}