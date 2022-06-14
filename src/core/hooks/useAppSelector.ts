import { TypedUseSelectorHook } from "react-redux"
import { useSelector } from "react-redux"
import { RootReducer } from "../store/store"

export const useAppSelector: TypedUseSelectorHook<RootReducer> = useSelector