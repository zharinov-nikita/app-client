import { createSlice } from "@reduxjs/toolkit"
import { FormType } from "./types/form.type"
import { StateType } from "./types/state.type"


const initialState: StateType = {
    links: [],
    drawer: {
        visible: false
    },
    form: {
        action: 'create',
        _id: '',
        offer: '',
        model: '',
        title: '',
        description: '',
        url: '',
        short: '',
        isShort: ''
    }
}


export const linkSlice = createSlice({
    name: 'link',
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


export default linkSlice.reducer