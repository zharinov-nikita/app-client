import { useEffect } from "react"
import { useAppSelector } from "./redux"
import { message as antdMessage } from 'antd'

export default function useMessage() {
    const { is, id, level, content } = useAppSelector(state => state.app.message)
    useEffect(() => {
        if (is) {
            antdMessage[level](content)
        }
    }, [is, id, level, content])
}