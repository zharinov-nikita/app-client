export type StatusType = 'сео' | 'контент' | 'интеграции' | 'настройка' | 'продвижение'

export interface IProject {
    _id?: string
    title: string
    offer: string
    status: StatusType
}

export interface IKey {
    name: string
    value: string
    frequency: string
}


export interface ISeo {
    mainKey: IKey
    highKey: IKey[]
    midKey: IKey[]
    lowKey: IKey[]
}