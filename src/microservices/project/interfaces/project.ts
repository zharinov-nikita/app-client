export type StatusType = 'сео' | 'контент' | 'интеграции' | 'настройка' | 'продвижение'

export interface IProject {
    _id?: string
    title: string
    offer: string
    status: StatusType
}

export interface IKey {
    id: number
    value: string
    frequency: number
}

export interface ISeo {
    main: IKey
    extra: IKey[]
}