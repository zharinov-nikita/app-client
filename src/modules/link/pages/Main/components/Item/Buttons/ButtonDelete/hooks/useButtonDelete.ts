import { useEffect } from "react"
import { useAppDispatch } from "../../../../../../../../../core/hooks/useAppDispatch"
import { appSlice } from "../../../../../../../../../core/store"
import { MessageType } from "../../../../../../../../../core/store/types/message.type"
import { useDeleteLinkMutation } from "../../../../../../../services"
import { LinkType } from "../../../../../../../store/types/link.type"

export function useButtonDelete(document: LinkType) {
    const dispatch = useAppDispatch()
    const { short } = document
    const { showMessage } = appSlice.actions
    const [deleteLink, { isSuccess: isSuccessDelete, isError: isErrorDelete }] = useDeleteLinkMutation()

    const messageSuccessDelete: MessageType = {
        id: Date.now(),
        level: 'success',
        content: `Ссылка ${short} успешно удалена`
    }

    const messageErrorDelete: MessageType = {
        id: Date.now(),
        level: 'error',
        content: `Что-то пошло не так`
    }


    useEffect(() => {
        if (isSuccessDelete) {
            dispatch(showMessage(messageSuccessDelete))
        }
        if (isErrorDelete) {
            dispatch(showMessage(messageErrorDelete))
        }
    }, [isSuccessDelete, isErrorDelete])


    return deleteLink
}