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
        highKey: [{ name: '', value: '', frequency: '' }, { name: '', value: '', frequency: '' }, { name: '', value: '', frequency: '' }],
        midKey: [{ name: '', value: '', frequency: '' }, { name: '', value: '', frequency: '' }, { name: '', value: '', frequency: '' }],
        lowKey: [{ name: '', value: '', frequency: '' }, { name: '', value: '', frequency: '' }, { name: '', value: '', frequency: '' }]
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
        }
        // KEY
    }
})


export default projectSlice.reducer