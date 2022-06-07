import { createSlice } from "@reduxjs/toolkit"


type TaskType = {
    id: number | string
    name: string
    date: string
    completed: boolean
}

type ProjectType = {
    id: number | string
    name: string
    status: string
    tasks: TaskType[]
}

type InitialStateType = {
    projects: ProjectType[]
}


const initialState: InitialStateType = {
    projects: [
        {
            id: 0,
            name: 'сео',
            status: 'запланировано',
            tasks: [
                { id: '0 - сео', name: 'Главный ключ', date: '24.08.2000', completed: false },
                { id: '1 - сео', name: 'Дополнительный ключ - 1', date: '24.08.2000', completed: false },
                { id: '2 - сео', name: 'Дополнительный ключ - 2', date: '24.08.2000', completed: false },
                { id: '3 - сео', name: 'Дополнительный ключ - 3', date: '24.08.2000', completed: false },
            ]
        }
    ]
}


export const projectSlice = createSlice({
    initialState,
    name: 'project',
    reducers: {
        completedTask(state: InitialStateType, action: { payload: TaskType }) {
            state.projects[0].tasks = state.projects[0].tasks.map(task => {
                if (task.id === action.payload.id) {
                    return { ...task, completed: !task.completed }
                }
                return task
            })
        }
    }

})


export default projectSlice.reducer