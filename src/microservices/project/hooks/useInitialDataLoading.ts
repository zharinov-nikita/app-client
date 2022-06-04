import Api from '../api'
import { appSlice } from "../../../store/app"
import { projectSlice } from "../store/project"
import { useAppDispatch } from "../../../hooks/redux"
import { useEffect } from "react"

export default function useInitialDataLoading() {
    const { startLoad, finshLoad, showError } = appSlice.actions
    const { getProjects } = projectSlice.actions
    const dispatch = useAppDispatch()

    async function asyncFetch() {
        try {
            dispatch(startLoad())
            const req = await Api.getProjects()
            dispatch(getProjects(req))
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