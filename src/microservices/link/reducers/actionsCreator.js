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
    LINK_CLEAR_FORM,
} from './types'


// => LOAD
export const startLoad = () => ({ type: LINK_START_LOAD })
export const finishLoad = () => ({ type: LINK_FINISH_LOAD })
// => LOAD

// => DRAWER
export const showDrawer = () => ({ type: LINK_SHOW_DRAWER })
export const hideDrawer = () => ({ type: LINK_HIDE_DRAWER })
// => DRAWER

// => ERROR
export const showError = () => ({ type: LINK_SHOW_ERROR })
export const hideError = () => ({ type: LINK_HIDE_ERROR })
// => ERROR

// => LINK
export const getLinks = (payload) => ({ type: LINK_GET_LINKS, payload })
export const createLink = (payload) => ({ type: LINK_CREATE_LINK, payload })
export const deleteLink = (payload) => ({ type: LINK_DELETE_LINK, payload })
// => LINK


// => FORM
export const clearForm = () => ({ type: LINK_CLEAR_FORM })
// => FORM