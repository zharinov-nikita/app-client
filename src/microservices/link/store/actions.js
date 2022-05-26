import { createAction } from '@reduxjs/toolkit'
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

    LINK_DISABLED_BUTTON,
} from './types'

export const linkShowDrawer = createAction(LINK_SHOW_DRAWER)
export const linkHideDrawer = createAction(LINK_HIDE_DRAWER)

export const linkStartLoad = createAction(LINK_START_LOAD)
export const linkFinishLoad = createAction(LINK_FINISH_LOAD)

export const linkShowError = createAction(LINK_SHOW_ERROR)
export const linkHideError = createAction(LINK_HIDE_ERROR)

export const linkGetLinks = createAction(LINK_GET_LINKS)
export const linkDeleteLink = createAction(LINK_DELETE_LINK)
export const linkCreateLink = createAction(LINK_CREATE_LINK)
export const linkUpdateLink = createAction(LINK_UPDATE_LINK)

export const linkSetForm = createAction(LINK_SET_FORM)
export const linkClearForm = createAction(LINK_CLEAR_FORM)
export const linkCreateForm = createAction(LINK_CREATE_FORM)
export const linkUpdateForm = createAction(LINK_UPDATE_FORM)