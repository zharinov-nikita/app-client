import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { message } from 'antd'


export default function useMessage() {
    const { isMessage, typeMessage, contentMessage } = useSelector(state => state.app.message)

    function showMessage() {
        if (isMessage) {
            message[typeMessage](contentMessage)
        }
    }

    useEffect(() => {
        showMessage()
    }, [isMessage, typeMessage, contentMessage])
}