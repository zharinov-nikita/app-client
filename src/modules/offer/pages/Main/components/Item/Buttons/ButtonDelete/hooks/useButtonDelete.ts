import { useEffect } from "react"
import { useAppDispatch } from "../../../../../../../../../core/hooks/useAppDispatch"
import { appSlice } from "../../../../../../../../../core/store"
import { MessageType } from "../../../../../../../../../core/store/types/message.type"
import { useDeleteOfferMutation } from "../../../../../../../services"
import { OfferType } from "../../../../../../../store/types/offer.type"

export function useButtonDelete(document: OfferType) {
    const dispatch = useAppDispatch()
    const { short } = document
    const { showMessage } = appSlice.actions
    const [deleteOffer, { isSuccess: isSuccessDelete, isError: isErrorDelete }] = useDeleteOfferMutation()

    const messageSuccessDelete: MessageType = {
        id: Date.now(),
        level: 'success',
        content: `Оффер ${short} успешно удалена`
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


    return deleteOffer
}