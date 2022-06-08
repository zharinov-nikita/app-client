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
}


const initialState: InitialStateType = {
    processes: [
        {
            _id: 0,
            name: 'сео',
            status: 'запланировано',
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
                { _id: 1, processId: 1, name: 'Главный ключ', date: '2022-08-02', completed: false },
                { _id: 2, processId: 1, name: 'Дополнительный ключ', date: '2022-08-02', completed: false }
            ]
        }
    ]
}

export const processSlice = createSlice({
    initialState,
    name: 'process',
    reducers: {
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