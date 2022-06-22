import { OfferPayCurrencyType } from "./offer.type"

export type FormType = {
    action?: 'create' | 'update' | 'save'
    _id: string
    name: string
    model: string
    type: string
    pay: {
        value: number
        currency: OfferPayCurrencyType
    }
    url: string
    short: string
    isShort?: string
}