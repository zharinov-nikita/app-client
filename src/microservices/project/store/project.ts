import { createSlice } from "@reduxjs/toolkit"
import { ILink } from "../../link/interfaces/link"
import { IKey, IProject, ISeo } from "../interfaces/project"


export interface IProjectState {
    projects: IProject[]
    seo: ISeo
}




const initialState: IProjectState = {
    projects: [],
    seo: {
        main: { id: 1, value: '', frequency: 0 },
        extra: [{ id: 1, value: '', frequency: 0 }]
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
        setMainKey(state: IProjectState, action: { payload: IKey }) {
            state.seo.main = { ...state.seo.main, ...action.payload }
        },
        addExtraKey(state: IProjectState, action: { payload: IKey }) {
            state.seo.extra = [...state.seo.extra, action.payload]
        },
        deleteExtraKey(state: IProjectState, action: { payload: IKey }) {
            state.seo.extra = state.seo.extra.filter(key => key.id !== action.payload.id)
        },
        setExtraKey(state: IProjectState, action: { payload: IKey }) {
            state.seo.extra = state.seo.extra.map(key => {
                if (key.id === action.payload.id) {
                    return { ...key, ...action.payload }
                }
                return key
            })
        }
        // KEY
    }
})


export default projectSlice.reducer