import Api from '../api'
import { appSlice } from "../../../core/store/app"
import { linkSlice } from "../store/link"
import { useAppDispatch } from "../../../core/hooks/redux"
import { useEffect } from "react"

export default function useInitialDataLoading() {
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