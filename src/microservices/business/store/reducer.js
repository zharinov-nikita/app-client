import { createReducer } from '@reduxjs/toolkit'
import initialState from './initialState'
import {
    businessStartLoad,
    businessFinishLoad,
    businessGetProjects,
} from './actions'






export default createReducer(initialState, {
    [businessStartLoad]: (state, action) => {
        state.isLoad = true
    },
    [businessFinishLoad]: (state, action) => {
        state.isLoad = false
    },


    [businessGetProjects]: (state, action) => {
        state.projects = [...action.payload]
    }
})

