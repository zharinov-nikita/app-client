import Api from '../api'
import { LinkType } from "../store/types/link.type"
import { appSlice } from "../../../core/store/app"
import { linkSlice } from "../store/link"
import { useAppDispatch } from "../../../core/hooks/redux"

export default function useApiRequests() {
    const { showMessage, hideError } = appSlice.actions
    const { createLink, updateLink, deleteLink } = linkSlice.actions
    const dispatch = useAppDispatch()

    // CREATE
    async function asyncCreateLink(link: LinkType) {
        try {
            dispatch(createLink(await Api.createLink(link)))
            dispatch(showMessage({ id: Date.now(), level: 'success', content: `Ссылка ${link.title} успешно создана` }))
            dispatch(hideError())
        } catch (e) {
            dispatch(showMessage({ id: Date.now(), level: 'error', content: 'Ошибка на сервере' }))
        }
    }
    // CREATE


    // UPDATE
    async function asyncUpdateLink(link: LinkType) {
        try {
            dispatch(updateLink(await Api.updateLink(link)))
            dispatch(showMessage({ id: Date.now(), level: 'success', content: `Ссылка ${link.title} успешно обновлена` }))
        } catch (e) {
            dispatch(showMessage({ id: Date.now(), level: 'error', content: 'Ошибка на сервере' }))
        }
    }
    // UPDATE


    // DELETE
    async function asyncDeleteLink(link: LinkType) {
        try {
            await Api.deleteLink(link)
            if (link?._id) {
                dispatch(deleteLink(link._id))
                dispatch(showMessage({ id: Date.now(), level: 'success', content: `Ссылка ${link.title} успешно удалена` }))
            }
        } catch (e) {
            dispatch(showMessage({ id: Date.now(), level: 'error', content: 'Ошибка на сервере' }))
        }
    }
    // DELETE



    return {
        createLink: asyncCreateLink,
        updateLink: asyncUpdateLink,
        deleteLink: asyncDeleteLink,
    }
}