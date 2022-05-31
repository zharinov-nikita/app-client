import { useEffect } from "react"
import { appStartLoad, appShowError, appFinishLoad } from '../store/actions'
import { useDispatch, useSelector } from "react-redux"

export default function useRequest(callback) {
    const { isError, isLoad } = useSelector(state => state.app)
    const dispatch = useDispatch()
    const request = async () => {
        try {
            dispatch(appStartLoad())
            await callback()
        } catch (e) {
            dispatch(appShowError())
        } finally {
            dispatch(appFinishLoad())
        }
    }

    useEffect(() => { request() }, [])

    return { isError, isLoad }
}