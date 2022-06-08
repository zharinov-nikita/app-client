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
                { _id: 1, processId: 0, name: 'Главный ключ', date: '22.08.2022', completed: false },
                { _id: 2, processId: 0, name: 'Дополнительный ключ', date: '22.08.2022', completed: false }
            ]
        },
        {
            _id: 1,
            name: 'контент',
            status: 'запланировано',
            tasks: [
                { _id: 1, processId: 1, name: 'Главный ключ', date: '22.08.2022', completed: false },
                { _id: 2, processId: 1, name: 'Дополнительный ключ', date: '22.08.2022', completed: false }
            ]
        }
    ]
}

export const processSlice = createSlice({
    initialState,
    name: 'process',
    reducers: {
        createProcess(state: InitialStateType, action: { payload: ProcessType }) {
            state.processes = [...state.processes, action.payload]
        },
        deleteProcess(state: InitialStateType, action: { payload: ProcessType }) {
            state.processes = state.processes.filter(process => process._id !== action.payload._id)
        },
        updateProcess(state: InitialStateType, action: { payload: ProcessType }) {
            state.processes = state.processes.map(process => {
                if (process._id === action.payload._id) {
                    return { ...process, ...action.payload }
                }
                return process
            })
        },



        createTaskProcess(state: InitialStateType, action: { payload: TaskType }) {
            state.processes[action.payload.processId].tasks = [...state.processes[action.payload.processId].tasks, action.payload]
        },
        deleteTaskProcess(state: InitialStateType, action: { payload: TaskType }) {
            state.processes[action.payload.processId].tasks = state.processes[action.payload.processId].tasks.filter(task => task._id !== action.payload._id)
        },
        updateTaskProcess(state: InitialStateType, action: { payload: TaskType }) {
            state.processes[action.payload.processId].tasks = state.processes[action.payload.processId].tasks.map(task => {
                if (task._id === action.payload._id) {
                    return { ...task, ...action.payload }
                }
                return task
            })
        },
    }
})


export default processSlice.reducer