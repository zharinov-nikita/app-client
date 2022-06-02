import { appSlice } from "../../../store/reducer"
import { linkSlice } from "../store"
import { useAppDispatch } from "../../../hooks/redux"
import Api from '../api'
import { useEffect } from "react"

export default function useRequestLinks() {
    const { startLoad, finshLoad, showError } = appSlice.actions
    const { getLinks } = linkSlice.actions
    const dispatch = useAppDispatch()

    async function asyncFetch() {
        try {
            dispatch(startLoad())
            const req = await Api.getLinks()
            dispatch(getLinks(req))
        } catch (e) {
            dispatch(showError())
        } finally {
            dispatch(finshLoad())
        }
    }


    useEffect(() => {
        asyncFetch()
    }, [])

}