import { RadioChangeEvent } from "antd"
import { useAppDispatch } from "../../../../../../../../core/hooks/useAppDispatch"
import { useAppSelector } from "../../../../../../../../core/hooks/useAppSelector"
import { linkSlice } from "../../../../../../store"

export default function useInput() {
    const { offer, model, title, description, url, short } = useAppSelector(state => state.link.form)
    const { setForm } = linkSlice.actions

    const link = useAppSelector(state => state.link.form)
    const dispatch = useAppDispatch()

    const onInputChange = (e: { target: HTMLInputElement }) => dispatch(setForm({ ...link, [String(e.target.name)]: e.target.value }))
    const onRadioChange = ({ target: { value, name } }: RadioChangeEvent) => dispatch(setForm({ ...link, [String(name)]: value }))



    return {
        onInputChange,
        onRadioChange,
        offer,
        model,
        title,
        description,
        url,
        short,
        link
    }
}