import { useEffect } from "react"
import { appSlice } from '../store/app'
import { useAppDispatch } from './redux'

export default function useInitialDataLoading(actions: any, request: any) {
    const { startLoad, finshLoad, showError } = appSlice.actions
    const dispatch = useAppDispatch()

    async function handler() {
        try {
            dispatch(startLoad())
            dispatch(actions(await request))
        } catch (e) {
            dispatch(showError())
        } finally {
            dispatch(finshLoad())
        }
    }


    useEffect(() => {
        handler()
    }, [])

}