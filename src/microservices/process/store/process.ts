import { createSlice } from "@reduxjs/toolkit"


export type TaskType = {
    _id: string | number
    processId: number
    name: string
    date: string
    completed: boolean
}

export type StatusProcessType = 'запланировано' | 'работа' | 'завершено'

export type ProcessType = {
    _id: string | number
    name: string
    status: StatusProcessType
    tasks: TaskType[]
}

export type InitialStateType = {
    processes: ProcessType[]
    mainKey: boolean
}


const initialState: InitialStateType = {
    mainKey: false,
    processes: [
        {
            _id: 0,
            name: 'сео',
            status: 'работа',
            tasks: [
                { _id: 1, processId: 0, name: 'Главный ключ', date: '2022-08-02', completed: false },
                { _id: 2, processId: 0, name: 'Дополнительный ключ', date: '2022-08-02', completed: false }
            ]
        },
        {
            _id: 1,
            name: 'контент',
            status: 'запланировано',
            tasks: [
                { _id: 1, processId: 1, name: 'Статья #1', date: '2022-08-02', completed: false },
                { _id: 2, processId: 1, name: 'Статья #2', date: '2022-08-02', completed: false }
            ]
        },
        {
            _id: 2,
            name: 'настройки',
            status: 'запланировано',
            tasks: [
                { _id: 1, processId: 2, name: 'Доменное имя', date: '2022-08-02', completed: false },
                { _id: 2, processId: 2, name: 'SSL сертификат', date: '2022-08-02', completed: false },
            ]
        },
        {
            _id: 3,
            name: 'интеграции',
            status: 'запланировано',
            tasks: [
                { _id: 1, processId: 3, name: 'Yandex webmaster', date: '2022-08-02', completed: false },
                { _id: 2, processId: 3, name: 'Yandex metrika', date: '2022-08-02', completed: false },
                { _id: 3, processId: 3, name: 'Google console search', date: '2022-08-02', completed: false },
                { _id: 4, processId: 3, name: 'Google analytics', date: '2022-08-02', completed: false },
            ]
        },
        {
            _id: 4,
            name: 'продвижение',
            status: 'запланировано',
            tasks: [
                { _id: 1, processId: 4, name: 'Добавить страницу #1 в Yandex webmaster', date: '2022-08-02', completed: false },
                { _id: 2, processId: 4, name: 'Добавить страницу #2 в Yandex webmaster', date: '2022-08-02', completed: false },
            ]
        },
    ]
}

export const processSlice = createSlice({
    initialState,
    name: 'process',
    reducers: {
        // 
        showMainKey(state: InitialStateType, action: { payload: boolean }) {
            state.mainKey = action.payload
        },
        // 


        // создание процесса
        createProcess(state: InitialStateType, action: { payload: ProcessType }) {
            state.processes = [...state.processes, action.payload]
        },
        // создание процесса


        // удаление процесса
        deleteProcess(state: InitialStateType, action: { payload: ProcessType }) {
            state.processes = state.processes.filter(process => process._id !== action.payload._id)
        },
        // удаление процесса


        // обновление процесса
        updateProcess(state: InitialStateType, action: { payload: ProcessType }) {
            state.processes = state.processes.map(process => {
                if (process._id === action.payload._id) {
                    return { ...process, ...action.payload }
                }
                return process
            })
        },
        // обновление процесса


        // создать задачу для процесса
        createTaskProcess(state: InitialStateType, action: { payload: TaskType }) {
            state.processes[action.payload.processId].tasks = [...state.processes[action.payload.processId].tasks, action.payload]
        },
        // создать задачу для процесса


        // удаление задачи из процесса
        deleteTaskProcess(state: InitialStateType, action: { payload: TaskType }) {
            state.processes[action.payload.processId].tasks = state.processes[action.payload.processId].tasks.filter(task => task._id !== action.payload._id)
        },
        // удаление задачи из процесса


        // обновлнеие задачи в процессе
        updateTaskProcess(state: InitialStateType, action: { payload: TaskType }) {
            const process = state.processes.findIndex(processes => processes._id === action.payload.processId)
            state.processes[process].tasks = state.processes[process].tasks.map(task => {
                if (task._id === action.payload._id) {
                    return { ...task, ...action.payload }
                }
                return task
            })
        }
        // обновлнеие задачи в процессе
    }
})


export default processSlice.reducer