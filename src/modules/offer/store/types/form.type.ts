export type FormType = {
    action?: 'create' | 'update' | 'save'
    _id: string
    name: string
    model: string
    type: string
    pay: {
        value: number
        currency: 'RUB' | 'USD' | 'EUR'
    }
    url: string
    short: string
    isShort?: string
}