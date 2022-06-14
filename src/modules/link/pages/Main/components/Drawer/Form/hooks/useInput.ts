import { useAppDispatch, useAppSelector } from "../../../../../../../../core/hooks/redux"
import { linkSlice } from "../../../../../../store"

export default function useInput() {
    const { offer, model, title, description, url, short } = useAppSelector(state => state.link.form)
    const { setForm } = linkSlice.actions
    const link = useAppSelector(state => state.link.form)
    const dispatch = useAppDispatch()

    const onChange = (e: { target: HTMLInputElement }) => dispatch(setForm({ ...link, [e.target.name]: e.target.value }))




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