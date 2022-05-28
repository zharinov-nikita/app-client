import axios from "axios"
import {
    appShowMessage,

    appStartLoad,
    appFinishLoad,

    appShowError,
    appHideError,
} from "../../../store/actions"

import {
    linkGetLinks,
    linkCreateLink,
    linkHideDrawer,
    linkClearForm,
    linkDeleteLink,
    linkUpdateLink,
} from "../store/actions"

import { ENDPOINT } from "./endpoints"

class ApiLink {
    create(data) {
        return async function (dispatch) {
            try {
                const req = await axios.post(ENDPOINT, data)
                const res = await req.data
                dispatch(linkCreateLink(res))
                dispatch(linkHideDrawer())
                dispatch(appHideError())
                dispatch(linkClearForm())
                dispatch(appShowMessage({ typeMessage: 'success', contentMessage: `Ссылка ${res.title} успешно создана` }))
            } catch (e) {
                dispatch(appShowMessage({ typeMessage: 'error', contentMessage: 'Ошибка на сервере' }))
            }
        }
    }
    get() {
        return async function (dispatch) {
            try {
                dispatch(appStartLoad())
                const req = await axios.get(ENDPOINT)
                const res = await req.data
                dispatch(linkGetLinks(res))
            } catch (e) {
                dispatch(appShowError())
            } finally {
                dispatch(appFinishLoad())
            }
        }
    }
    delete({ _id, title }) {
        return async function (dispatch) {
            try {
                await axios.delete(`${ENDPOINT}/${_id}`)
                dispatch(linkDeleteLink(_id))
                dispatch(appShowMessage({ typeMessage: 'success', contentMessage: `Ссылка ${title} успешно удалена` }))
            } catch (e) {
                dispatch(appShowMessage({ typeMessage: 'error', contentMessage: 'Ошибка на сервере' }))
            }
        }
    }
    update(data) {
        return async function (dispatch) {
            try {
                const req = await axios.patch(ENDPOINT, data)
                const res = await req.data
                dispatch(linkUpdateLink(res))
                dispatch(linkHideDrawer())
                dispatch(appShowMessage({ typeMessage: 'success', contentMessage: `Ссылка ${res.title} успешно обновлена` }))
            } catch (e) {
                dispatch(appShowMessage({ typeMessage: 'error', contentMessage: 'Ошибка на сервере' }))
            }
        }
    }
}

export default new ApiLink()