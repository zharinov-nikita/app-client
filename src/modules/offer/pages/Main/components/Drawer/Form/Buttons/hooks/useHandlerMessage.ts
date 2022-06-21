import { useEffect } from "react"
import { useAppDispatch } from "../../../../../../../../../core/hooks/useAppDispatch"
import { appSlice } from "../../../../../../../../../core/store"
import { MessageType } from "../../../../../../../../../core/store/types/message.type"
import { useCreateOfferMutation, useUpdateOfferMutation } from "../../../../../../../services"
import { offerSlice } from "../../../../../../../store"
import useInput from "../../hooks/useInput"


export function useHandlerMessage() {
    const [createOffer, { isSuccess: isSuccessCreate, isError: isErrorCreate }] = useCreateOfferMutation()
    const [updateOffer, { isSuccess: isSuccessUpdate, isError: isErrorUpdate }] = useUpdateOfferMutation()

    const { name } = useInput()
    const dispatch = useAppDispatch()

    const { showMessage } = appSlice.actions
    const { hideDrawer } = offerSlice.actions

    const messageIsSuccessCreate: MessageType = {
        id: Date.now(),
        level: 'success',
        content: `Оффер ${name} успешно создан`
    }

    const messageIsErrorCreate: MessageType = {
        id: Date.now(),
        level: 'error',
        content: `Что-то пошло не так`
    }

    const messageIsSuccesUpdate: MessageType = {
        id: Date.now(),
        level: 'success',
        content: `Оффер ${name} успешно обновлен`
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


    return { createOffer, updateOffer }
}