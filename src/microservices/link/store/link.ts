import { createSlice } from "@reduxjs/toolkit"
import { IDrawer, IForm, ILink } from "../interfaces/link"


export interface ILinkState {
    links: ILink[]
    drawer: IDrawer
    form: IForm
}




const initialState: ILinkState = {
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
        // LINK
        getLinks(state: ILinkState, action: { payload: ILink[] }) {
            state.links = [...action.payload]
        },
        deleteLink(state: ILinkState, action: { payload: string }) {
            state.links = state.links.filter(link => link._id !== action.payload)
        },
        createLink(state: ILinkState, action: { payload: ILink }) {
            state.links = [...state.links, action.payload]
            state.drawer.visible = false
            state.form = initialState.form
        },
        updateLink(state: ILinkState, action: { payload: ILink }) {
            state.links = state.links.map(link => {
                if (link._id === action.payload._id) {
                    return action.payload
                }
                return link
            })
            state.drawer.visible = false
            state.form = initialState.form
        },
        // LINK

        // DRAWER
        showDrawer(state: ILinkState) {
            state.drawer.visible = true
        },
        hideDrawer(state: ILinkState) {
            state.drawer.visible = false
        },
        // DRAWER


        // FORM
        setForm(state: ILinkState, action: { payload: any }) {
            state.form = { ...state.form, ...action.payload }
        },
        createForm(state: ILinkState) {
            state.form = initialState.form
            state.drawer.visible = true
        }
        ,
        updateForm(state: ILinkState, action: { payload: any }) {
            state.form = { action: 'update', ...action.payload, isShort: action.payload.short }
            state.drawer.visible = true
        }
        // FORM
    }
})


export default linkSlice.reducer