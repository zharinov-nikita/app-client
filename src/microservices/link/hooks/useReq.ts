import Api from '../api'
import { ILink } from '../interfaces/link'
import { appSlice } from "../../../store/app"
import { linkSlice } from "../store/link"
import { useAppDispatch } from "../../../hooks/redux"

export default function useReq() {
    const { showMessage, hideError } = appSlice.actions
    const { createLink, updateLink, deleteLink } = linkSlice.actions
    const dispatch = useAppDispatch()


    async function asyncCreateLink(link: ILink) {
        try {
            const req = await Api.createLink(link)
            dispatch(createLink(req))
            dispatch(showMessage({ id: Date.now(), level: 'success', content: `Ссылка ${link.title} успешно создана` }))
            dispatch(hideError())
        } catch (e) {
            dispatch(showMessage({ id: Date.now(), level: 'error', content: 'Ошибка на сервере' }))
        }
    }


    async function asyncUpdateLink(link: ILink) {
        try {
            const req = await Api.updateLink(link)
            dispatch(updateLink(req))
            dispatch(showMessage({ id: Date.now(), level: 'success', content: `Ссылка ${link.title} успешно обновлена` }))
        } catch (e) {
            dispatch(showMessage({ id: Date.now(), level: 'error', content: 'Ошибка на сервере' }))
        }
    }

    async function asyncDeleteLink(link: ILink) {
        try {
            await Api.deleteLink(link)
            dispatch(deleteLink(link._id))
            dispatch(showMessage({ id: Date.now(), level: 'success', content: `Ссылка ${link.title} успешно удалена` }))
        } catch (e) {
            dispatch(showMessage({ id: Date.now(), level: 'error', content: 'Ошибка на сервере' }))
        }
    }


    return {
        createLink: asyncCreateLink,
        updateLink: asyncUpdateLink,
        deleteLink: asyncDeleteLink,
    }
}