import { createSlice } from "@reduxjs/toolkit"
import { IKey, IProject, ISeo } from "../interfaces/project"


export interface IProjectState {
    projects: IProject[]
    seo: ISeo
}




const initialState: IProjectState = {
    projects: [],
    seo: {
        mainKey: { name: 'mainKey', value: 'Главный ключ - 1', frequency: '2200' },
        highKey: [{ name: 'highKey', value: 'Высокочастотный ключ - 1', frequency: '2200' }],
        midKey: [{ name: 'midKey', value: 'Среднечастотный ключ - 1', frequency: '2200' }],
        lowKey: [{ name: 'lowKey', value: 'Низкочастотный ключ - 1', frequency: '2200' }]
    }
}


export const projectSlice = createSlice({
    name: 'project',
    initialState,
    reducers: {
        // PROJECT
        getProjects(state: IProjectState, action: { payload: IProject[] }) {
            state.projects = [...action.payload]
        },
        deleteProject(state: IProjectState, action: { payload: string }) {
            state.projects = state.projects.filter(link => link._id !== action.payload)
        },
        createProject(state: IProjectState, action: { payload: IProject }) {
            state.projects = [...state.projects, action.payload]
        },
        updateProject(state: IProjectState, action: { payload: IProject }) {
            state.projects = state.projects.map(link => {
                if (link._id === action.payload._id) {
                    return action.payload
                }
                return link
            })
        },
        // PROJECT\

        // KEY
        createMainKey(state: IProjectState, action: { payload: IKey }) {
            state.seo.mainKey = action.payload
        },
        setMainKey(state: IProjectState, action: { payload: string }) {
            state.seo.mainKey = { ...state.seo.mainKey, value: action.payload }
        },
        createHighKey(state: IProjectState, action: { payload: IKey }) {
            state.seo.highKey = [...state.seo.highKey, action.payload]
        },
        // KEY
    }
})


export default projectSlice.reducer