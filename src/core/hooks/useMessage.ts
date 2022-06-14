import { useEffect } from "react"
import { useAppSelector } from "./useAppSelector"
import { message } from 'antd'

export default function useMessage() {
    const { is, id, level, content } = useAppSelector(state => state.app.message)
    useEffect(() => {
        if (is) {
            message[level](content)
        }
    }, [is, id, level, content])
}