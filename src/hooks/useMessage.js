import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { message } from 'antd'


export default function useMessage() {
    const { isMessage, typeMessage, contentMessage } = useSelector(state => state.app.message)

    useEffect(() => {
        if (isMessage) {
            message[typeMessage](contentMessage)
        }
    }, [isMessage, typeMessage, contentMessage])
}