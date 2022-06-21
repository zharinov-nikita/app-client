import { createSlice } from "@reduxjs/toolkit"
import { FormType } from "./types/form.type"
import { StateType } from "./types/state.type"


const initialState: StateType = {
    offers: [],
    drawer: {
        visible: false
    },
    form: {
        action: 'create',
        _id: '',
        name: '',
        model: '',
        type: '',
        pay: 0,
        url: '',
        short: '',
        isShort: ''
    }
}


export const offerSlice = createSlice({
    name: 'offer',
    initialState,
    reducers: {
        // DRAWER
        showDrawer(state: StateType) {
            state.drawer.visible = true
        },
        hideDrawer(state: StateType) {
            state.drawer.visible = false
        },
        // DRAWER


        // FORM
        setForm(state: StateType, action: { payload: FormType }) {
            state.form = { ...state.form, ...action.payload }
        },
        createForm(state: StateType) {
            state.form = initialState.form
            state.drawer.visible = true
        }
        ,
        updateForm(state: StateType, action: { payload: FormType }) {
            state.form = { ...action.payload, action: 'update', isShort: action.payload.short }
            state.drawer.visible = true
        }
        // FORM
    }
})


export default offerSlice.reducer