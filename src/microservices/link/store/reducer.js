import { createReducer } from '@reduxjs/toolkit'
import initialState from './initialState'
import {
    linkShowDrawer,
    linkHideDrawer,

    linkGetLinks,
    linkDeleteLink,
    linkCreateLink,
    linkUpdateLink,

    linkSetForm,
    linkClearForm,
    linkCreateForm,
    linkUpdateForm,
} from './actions'
import { appShowError } from '../../../store/actions'





export default createReducer(initialState, {
    [linkShowDrawer]: (state, action) => {
        state.drawer.visible = true
    },
    [linkHideDrawer]: (state, action) => {
        state.drawer.visible = false
    },

    [linkGetLinks]: (state, action) => {
        state.links = [...action.payload]
    },
    [linkDeleteLink]: (state, action) => {
        state.links = state.links.filter(link => link._id !== action.payload)
    },
    [linkCreateLink]: (state, action) => {
        state.links = [...state.links, action.payload]
    },
    [linkUpdateLink]: (state, action) => {
        state.links = state.links.map(link => { if (link._id !== action.payload._id) { return link } return { ...link, ...action.payload } })
    },


    [linkSetForm]: (state, action) => {
        state.drawer.form = { ...state.drawer.form, ...action.payload }
    },
    [linkClearForm]: (state, action) => {
        state.drawer.form = { ...initialState.drawer.form }
    },
    [linkCreateForm]: (state, action) => {
        state.drawer = { form: { ...initialState.drawer.form }, visible: true }
    },
    [linkUpdateForm]: (state, action) => {
        state.drawer = { form: action.payload, visible: true }
    },
})

