import { createSlice } from "@reduxjs/toolkit"
import { IProject } from "../interfaces/project"


export interface IProjectState {
    projects: IProject[]
}




const initialState: IProjectState = {
    projects: []
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
        // PROJECT
    }
})


export default projectSlice.reducer