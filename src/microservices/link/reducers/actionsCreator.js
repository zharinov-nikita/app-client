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

    LINK_CLEAR_FORM,
} from './types'


// => LOAD
export const linkStartLoad = () => ({ type: LINK_START_LOAD })
export const linkFinishLoad = () => ({ type: LINK_FINISH_LOAD })
// => LOAD

// => DRAWER
export const linkShowDrawer = () => ({ type: LINK_SHOW_DRAWER })
export const linkHideDrawer = () => ({ type: LINK_HIDE_DRAWER })
// => DRAWER

// => ERROR
export const linkShowError = () => ({ type: LINK_SHOW_ERROR })
export const linkHideError = () => ({ type: LINK_HIDE_ERROR })
// => ERROR

// => LINK
export const linkGetLinks = (payload) => ({ type: LINK_GET_LINKS, payload })
export const linkCreateLink = (payload) => ({ type: LINK_CREATE_LINK, payload })
export const linkUpdateLink = (payload) => ({ type: LINK_UPDATE_LINK, ...payload })
export const linkDeleteLink = (payload) => ({ type: LINK_DELETE_LINK, payload })
// => LINK


// => FORM
export const linkClearForm = () => ({ type: LINK_CLEAR_FORM })
// => FORM