import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { message } from 'antd'


export default function useMessage() {
    const { is, id, level, content } = useSelector(state => state.app.message)

    useEffect(() => {
        if (is) {
            message[level](content)
        }
    }, [is, id, level, content])
}