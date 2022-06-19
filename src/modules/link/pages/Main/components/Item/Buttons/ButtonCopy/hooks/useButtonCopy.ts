import { useAppDispatch } from "../../../../../../../../../core/hooks/useAppDispatch"
import { appSlice } from "../../../../../../../../../core/store"
import { MessageType } from "../../../../../../../../../core/store/types/message.type"
import { LinkType } from "../../../../../../../store/types/link.type"

export function useButtonCopy(document: LinkType) {
    const dispatch = useAppDispatch()
    const { showMessage } = appSlice.actions
    const successMessage: MessageType = { id: Date.now(), level: 'success', content: `Ссылка ${document.title} скопировано` }
    const errorMessage: MessageType = { id: Date.now(), level: 'error', content: `Что-то пошло не так` }


    function handlerCopy() {
        try {
            navigator.clipboard.writeText(`http://localhost:3030/api/link/cc/${document.short}`)
            dispatch(showMessage(successMessage))
        } catch (e) {
            dispatch(showMessage(errorMessage))
        }
    }

    return {handlerCopy}
}