import { useEffect, useState } from "react"
import { useAppSelector } from "../../../../../../../../core/hooks/useAppSelector"
import { useGetOfferQuery } from "../../../../../../services"

export default function useValid() {
    const [disabled, setDisabled] = useState(true)
    const { name, model, type, pay, url, short, isShort } = useAppSelector(state => state.offer.form)

    const { data: offers } = useGetOfferQuery()
    const checkCyrilic = /[а-яА-ЯЁё]/.test(short)

    const checkEmpty = name.length > 0 && model.length > 0 && type.length > 0 && pay.value > 0 && url.length > 0 && short.length > 0
    let checkSame: any

    if (isShort) {
        if (isShort && short !== isShort) {
            checkSame = offers && offers.find(offer => short === offer.short)
        }
    } else {
        checkSame = offers && offers.find(offer => short === offer.short)
    }



    const helpInputShort = (checkSame) && 'Уже существует' || (checkCyrilic) && 'Кириллица запрещена'


    useEffect(() => {
        if (checkEmpty && !checkCyrilic && !checkSame) {
            setDisabled(false)
        } else {
            setDisabled(true)
        }
    }, [name, model, type, pay, url, short])


    return {
        disabled,
        helpInputShort
    }
}