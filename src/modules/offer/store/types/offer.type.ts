export type OfferPayCurrencyType = 'RUB' | 'USD' | 'EUR' | '%'

export type OfferType = {
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
}

export type OfferCreateType = {
    name: string
    model: string
    type: string
    pay: {
        value: number
        currency: OfferPayCurrencyType
    }
    url: string
    short: string
}