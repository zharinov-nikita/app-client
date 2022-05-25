import {
    LINK_SHOW_DRAWER,
    LINK_HIDE_DRAWER,

    LINK_START_LOAD,
    LINK_FINISH_LOAD,

    LINK_SHOW_ERROR,
    LINK_HIDE_ERROR,

    LINK_GET_LINKS,
    LINK_DELETE_LINK,
    LINK_CREATE_LINK,
    LINK_UPDATE_LINK,

    LINK_SET_FORM,
    LINK_CLEAR_FORM,
    LINK_CREATE_FORM,
    LINK_UPDATE_FORM,
} from './types'

const defaultState = {
    isShort: '',
    isLoad: false,
    isError: false,
    drawer: { visible: false, form: { action: 'create', offer: '', model: '', title: '', description: '', url: '', short: '' } },
    links: []
}

export const linkReducer = (state = defaultState, action) => {
    switch (action.type) {

        // DRAWER
        case LINK_SHOW_DRAWER:
            return { ...state, drawer: { ...state.drawer, visible: !state.drawer.visible } }
        case LINK_HIDE_DRAWER:
            return { ...state, drawer: { ...state.drawer, visible: !state.drawer.visible } }
        // DRAWER


        //=> LOAD
        case LINK_START_LOAD:
            return { ...state, isLoad: !state.isLoad }
        case LINK_FINISH_LOAD:
            return { ...state, isLoad: !state.isLoad }
        //=> LOAD


        //=> ERROR
        case LINK_SHOW_ERROR:
            return { ...state, isError: true }
        case LINK_HIDE_ERROR:
            return { ...state, isError: false }
        //=> ERROR


        //=> LINK
        case LINK_GET_LINKS:
            return { ...state, links: [...state.links, ...action.payload] }
        case LINK_DELETE_LINK:
            return { ...state, links: state.links.filter(link => link._id !== action.payload) }
        case LINK_CREATE_LINK:
            return { ...state, links: [...state.links, action.payload] }
        case LINK_UPDATE_LINK: return { ...state, links: state.links.map(link => { if (link._id !== action._id) { return link } return { ...link, ...action } }) }
        //=> LINK


        // => FORM
        case LINK_SET_FORM:
            return { ...state, drawer: { ...state.drawer, form: { ...state.drawer.form, ...action } } }
        case LINK_CLEAR_FORM:
            return { ...state, drawer: { ...state.drawer, form: { ...defaultState.drawer.form } } }
        case LINK_CREATE_FORM:
            return { ...state, drawer: { ...state.drawer, form: { ...defaultState.drawer.form }, visible: !state.drawer.visible } }
        case LINK_UPDATE_FORM:
            return { ...state, drawer: { ...state.drawer, form: { ...state.drawer.form, ...action }, visible: !state.drawer.visible } }
        // => FORM

        default:
            return state
    }
}



