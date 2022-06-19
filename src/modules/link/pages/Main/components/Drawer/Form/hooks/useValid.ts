import { useEffect, useState } from "react"
import { useAppSelector } from "../../../../../../../../core/hooks/useAppSelector"
import { useGetLinkQuery } from "../../../../../../services"

export default function useValid() {
    const [disabled, setDisabled] = useState(true)
    const { offer, model, title, description, url, short, isShort } = useAppSelector(state => state.link.form)
    const { data: links } = useGetLinkQuery()
    const checkCyrilic = /[а-яА-ЯЁё]/.test(short)
    const checkEmpty = offer.length > 0 && model.length > 0 && title.length > 0 && description.length > 0 && url.length > 0 && short.length > 0
    let checkSame: any

    if (isShort) {
        if (isShort && short !== isShort) {
            checkSame = links && links.find(link => short === link.short)
        }
    } else {
        checkSame = links && links.find(link => short === link.short)
    }



    const helpInputShort = (checkSame) && 'Уже существует' || (checkCyrilic) && 'Кириллица запрещена'


    useEffect(() => {
        if (checkEmpty && !checkCyrilic && !checkSame) {
            setDisabled(false)
        } else {
            setDisabled(true)
        }
    }, [offer, model, title, description, url, short])


    return {
        disabled,
        helpInputShort
    }
}