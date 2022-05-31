import axios from "axios"
import {
    appShowMessage,
    appHideError,
} from "../../../store/actions"

import {
    linkCreateLink,
    linkHideDrawer,
    linkClearForm,
    linkDeleteLink,
    linkUpdateLink,
} from "../store/actions"

import { ENDPOINT } from "./config"

class Api {
    create(data) {
        return async function (dispatch) {
            try {
                const req = await axios.post(ENDPOINT, data)
                const res = await req.data
                dispatch(linkCreateLink(res))
                dispatch(linkHideDrawer())
                dispatch(appHideError())
                dispatch(linkClearForm())
                dispatch(appShowMessage({ id: Date.now(), level: 'success', content: `Ссылка ${res.title} успешно создана` }))
            } catch (e) {
                dispatch(appShowMessage({ id: Date.now(), level: 'error', content: 'Ошибка на сервере' }))
            }
        }
    }
    async get() {
        const request = await axios.get(ENDPOINT)
        return await request.data
    }
    delete({ _id, title }) {
        return async function (dispatch) {
            try {
                await axios.delete(`${ENDPOINT}/${_id}`)
                dispatch(linkDeleteLink(_id))
                dispatch(appShowMessage({ id: Date.now(), level: 'success', content: `Ссылка ${title} успешно удалена` }))
            } catch (e) {
                dispatch(appShowMessage({ id: Date.now(), level: 'error', content: 'Ошибка на сервере' }))
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
                dispatch(appShowMessage({ id: Date.now(), level: 'success', content: `Ссылка ${res.title} успешно обновлена` }))
            } catch (e) {
                dispatch(appShowMessage({ id: Date.now(), level: 'error', content: 'Ошибка на сервере' }))
            }
        }
    }
}

export default new Api()