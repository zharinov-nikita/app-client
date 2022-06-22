import { RadioChangeEvent } from "antd"
import { useAppDispatch } from "../../../../../../../../core/hooks/useAppDispatch"
import { useAppSelector } from "../../../../../../../../core/hooks/useAppSelector"
import { offerSlice } from "../../../../../../store"
import { OfferPayCurrencyType } from "../../../../../../store/types/offer.type"

export default function useInput() {
    const { name, model, type, pay, url, short } = useAppSelector(state => state.offer.form)
    const { setForm } = offerSlice.actions

    const offer = useAppSelector(state => state.offer.form)
    const dispatch = useAppDispatch()

    const onInputChange = (e: { target: HTMLInputElement }) => dispatch(setForm({ ...offer, [String(e.target.name)]: e.target.value }))
    const onRadioChange = ({ target: { value, name } }: RadioChangeEvent) => dispatch(setForm({ ...offer, [String(name)]: value }))
    const onChangePayValue = (value: number) => dispatch(setForm({ ...offer, pay: { ...offer.pay, value } }))
    const onChangePayCurrency = (currency: OfferPayCurrencyType) => dispatch(setForm({ ...offer, pay: { ...offer.pay, currency } }))



    return {
        onInputChange,
        onRadioChange,
        onChangePayValue,
        onChangePayCurrency,
        name,
        model,
        type,
        pay,
        url,
        short,
        offer
    }
}