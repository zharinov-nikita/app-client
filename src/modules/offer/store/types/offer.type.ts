export type OfferType = {
    _id: string
    name: string
    model: string
    type: string
    pay: string
    url: string
    short: string
}

export type OfferCreateType = {
    name: string
    model: string
    type: string
    pay: string
    url: string
    short: string
}