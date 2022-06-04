export type StatusType = 'сео' | 'контент' | 'интеграции' | 'настройка' | 'продвижение'

export interface IProject {
    _id?: string
    title: string
    offer: string
    status: StatusType
}

export interface IInputs {
    name: string
    value: string
    frequency: string
}
