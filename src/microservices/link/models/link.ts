export interface ILink {
    _id: string
    offer: string
    model: string
    title: string
    description: string
    url: string
    short: string
}

export interface IDrawer {
    visible: boolean
}


type action = 'create' | 'update'

export interface IForm {
    action: action
    _id: string
    offer: string
    model: string
    title: string
    description: string
    url: string
    short: string
    isShort?: string
}