import { createSlice } from "@reduxjs/toolkit"
import { IInputs, IProject } from "../interfaces/project"


export interface IProjectState {
    projects: IProject[]
    inputs: IInputs[]
}




const initialState: IProjectState = {
    projects: [],
    inputs: []
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


        // INPUTS
        createInput(state: IProjectState, action: { payload: IInputs }) {
            state.inputs = [...state.inputs, action.payload]
        }
        // INPUTS
    }
})


export default projectSlice.reducer