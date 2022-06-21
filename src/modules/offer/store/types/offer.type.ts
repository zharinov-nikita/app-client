export type OfferType = {
    _id: string
    name: string
    model: string
    type: string
    pay: number
    url: string
    short: string
}

export type OfferCreateType = {
    name: string
    model: string
    type: string
    pay: number
    url: string
    short: string
}