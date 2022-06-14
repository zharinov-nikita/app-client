import { appSlice } from "../store/app"
import { useAppDispatch } from "./redux"

export default function useRequest(action: any, request: any) {
    const { showError } = appSlice.actions
    const dispatch = useAppDispatch()

    async function handlerRequest() {
        try {
            dispatch(action(await request))
        } catch (e) {
            dispatch(showError())
        }
    }

    return handlerRequest
}