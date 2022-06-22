import { useAppDispatch } from "../../../../../../../../../core/hooks/useAppDispatch"
import { appSlice } from "../../../../../../../../../core/store"
import { MessageType } from "../../../../../../../../../core/store/types/message.type"
import { OfferType } from "../../../../../../../store/types/offer.type"

export function useButtonCopy(document: OfferType) {
    const dispatch = useAppDispatch()
    const { showMessage } = appSlice.actions

    const successMessage: MessageType = {
        id: Date.now(),
        level: 'success',
        content: `Оффер ${document.name} скопирован`
    }
    const errorMessage: MessageType = {
        id: Date.now(),
        level: 'error',
        content: `Что-то пошло не так`
    }


    function handlerCopy() {
        try {
            navigator
                .clipboard
                .writeText(`http://localhost:3030/api/offer/cc/${document.short}`)
            dispatch(showMessage(successMessage))
        } catch (e) {
            dispatch(showMessage(errorMessage))
        }
    }

    return { handlerCopy }
}