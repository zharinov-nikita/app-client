import { useAppDispatch, useAppSelector } from "../../../../../../hooks/redux"
import { linkSlice } from "../../../../store/link"

export default function useInput() {
    const { offer, model, title, description, url, short } = useAppSelector(state => state.link.form)
    const { setForm } = linkSlice.actions
    const link = useAppSelector(state => state.link.form)
    const dispatch = useAppDispatch()

    const onChange = (e: { target: HTMLInputElement }) => dispatch(setForm({ [e.target.name]: e.target.value }))


    return {
        onChange,
        offer,
        model,
        title,
        description,
        url,
        short,
        link
    }
}