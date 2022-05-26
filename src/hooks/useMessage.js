import { message } from 'antd'
import { useDispatch, useSelector } from 'react-redux'

const success = (content, callback) => {
    message.success(content, 2, callback)
}

const error = (content, callback) => {
    message.error(content, 2, callback)
}


export default function useMessage() {
    const dispatch = useDispatch()
    const { isMessage, typeMessage, contentMessage } = useSelector(state => state.app.message)

    if (isMessage) {
        switch (typeMessage) {
            case 'success':
                return success(contentMessage, dispatch({ type: 'APP_HIDE_MESSAGE' }))
            case 'error':
                return error(contentMessage, dispatch({ type: 'APP_HIDE_MESSAGE' }))
        }

    }
}
