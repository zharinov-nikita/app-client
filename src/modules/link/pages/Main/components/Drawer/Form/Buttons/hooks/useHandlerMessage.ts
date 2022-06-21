import { useEffect } from "react"
import useInput from "../../hooks/useInput"
import { useAppDispatch } from "../../../../../../../../../core/hooks/useAppDispatch"
import { appSlice } from "../../../../../../../../../core/store"
import { MessageType } from "../../../../../../../../../core/store/types/message.type"
import { useCreateLinkMutation, useUpdateLinkMutation } from "../../../../../../../services"
import { linkSlice } from "../../../../../../../store"


export function useHandlerMessage() {
    const [createLink, { isSuccess: isSuccessCreate, isError: isErrorCreate }] = useCreateLinkMutation()
    const [updateLink, { isSuccess: isSuccessUpdate, isError: isErrorUpdate }] = useUpdateLinkMutation()

    const { link } = useInput()
    const dispatch = useAppDispatch()

    const { showMessage } = appSlice.actions
    const { hideDrawer } = linkSlice.actions

    const messageIsSuccessCreate: MessageType = {
        id: Date.now(),
        level: 'success',
        content: `Ссылка ${link.title} успешно создана`
    }

    const messageIsErrorCreate: MessageType = {
        id: Date.now(),
        level: 'error',
        content: `Что-то пошло не так`
    }

    const messageIsSuccesUpdate: MessageType = {
        id: Date.now(),
        level: 'success',
        content: `Ссылка ${link.title} успешно обновлена`
    }

    const messageIsErrorUpdate: MessageType = {
        id: Date.now(),
        level: 'error',
        content: `Что-то пошло не так`
    }

    useEffect(() => {
        if (isSuccessCreate) {
            dispatch(showMessage(messageIsSuccessCreate))
            dispatch(hideDrawer())
        }
        if (isErrorCreate) {
            dispatch(showMessage(messageIsErrorCreate))
        }
        if (isSuccessUpdate) {
            dispatch(showMessage(messageIsSuccesUpdate))
            dispatch(hideDrawer())
        }
        if (isErrorUpdate) {
            dispatch(showMessage(messageIsErrorUpdate))
        }
    }, [isSuccessCreate, isErrorCreate, isSuccessUpdate, isErrorCreate])


    return { createLink, updateLink }
}