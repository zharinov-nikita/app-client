import { RadioChangeEvent } from "antd"
import { useAppDispatch } from "../../../../../../../../core/hooks/useAppDispatch"
import { useAppSelector } from "../../../../../../../../core/hooks/useAppSelector"
import { offerSlice } from "../../../../../../store"

export default function useInput() {
    const { name, model, type, pay, url, short } = useAppSelector(state => state.offer.form)
    const { setForm } = offerSlice.actions

    const offer = useAppSelector(state => state.offer.form)
    const dispatch = useAppDispatch()

    const onInputChange = (e: { target: HTMLInputElement }) => dispatch(setForm({ ...offer, [String(e.target.name)]: e.target.value }))
    const onRadioChange = ({ target: { value, name } }: RadioChangeEvent) => dispatch(setForm({ ...offer, [String(name)]: value }))
    const onInputNumberChange = (value: number) => dispatch(setForm({ ...offer, pay: value }))



    return {
        onInputChange,
        onRadioChange,
        onInputNumberChange,
        name,
        model,
        type,
        pay,
        url,
        short,
        offer
    }
}