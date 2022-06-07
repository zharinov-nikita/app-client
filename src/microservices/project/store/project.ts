import { createSlice } from "@reduxjs/toolkit"


type TaskType = {
    projectId: number
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
                { projectId: 0, id: 0, name: 'Главный ключ', date: '24.08.2000', completed: false },
                { projectId: 0, id: 1, name: 'Дополнительный ключ - 1', date: '24.08.2000', completed: false },
            ]
        },
        {
            id: 1,
            name: 'контент',
            status: 'запланировано',
            tasks: [
                { projectId: 1, id: 0, name: 'Статья #1', date: '24.08.2000', completed: false },
                { projectId: 1, id: 1, name: 'Статья #2', date: '24.08.2000', completed: false },
            ]
        },
        {
            id: 2,
            name: 'настройки',
            status: 'запланировано',
            tasks: [
                { projectId: 2, id: 0, name: 'Доменное имя', date: '24.08.2000', completed: false },
                { projectId: 2, id: 1, name: 'Ssl сертификат', date: '24.08.2000', completed: false },
            ]
        }
    ]
}


export const projectSlice = createSlice({
    initialState,
    name: 'project',
    reducers: {
        statusProject(state: InitialStateType, action: { payload: ProjectType }) {
            state.projects = state.projects.map(project => {
                if (project.id === action.payload.id) {
                    return { ...project, status: action.payload.status }
                }
                return project
            })
        },

        completedTask(state: InitialStateType, action: { payload: TaskType }) {
            state.projects[action.payload.projectId].tasks = state.projects[action.payload.projectId].tasks.map(task => {
                if (task.id === action.payload.id) {
                    return { ...task, completed: !task.completed }
                }
                return task
            })
        }
    }

})


export default projectSlice.reducer