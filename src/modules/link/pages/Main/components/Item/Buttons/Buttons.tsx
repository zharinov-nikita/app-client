import React, { useEffect } from 'react'

import { Button } from 'antd'
import { DeleteOutlined, BugOutlined, BarChartOutlined } from '@ant-design/icons'
import { LinkType } from '../../../../../store/types/link.type'
import { useAppDispatch } from '../../../../../../../core/hooks/useAppDispatch'
import { linkSlice } from '../../../../../store'
import { appSlice } from '../../../../../../../core/store'
import { useDeleteLinkMutation } from '../../../../../services'
import { MessageType } from '../../../../../../../core/store/types/message.type'
import ButtonEdit from './ButtonEdit'

interface IDocumentProps {
    document: LinkType
}


const Buttons: React.FC<IDocumentProps> = ({ document }) => {
    const [deleteLink, { isSuccess: isSuccessDelete, isError: isErrorDelete }] = useDeleteLinkMutation()
    const { _id, offer, model, title, description, url, short } = document
    const link = { _id, offer, model, title, description, url, short }
    const copy = `http://localhost:3030/api/link/cc/${short}`
    const { showMessage } = appSlice.actions
    const { updateForm } = linkSlice.actions
    const dispatch = useAppDispatch()

    const messageSuccessDelete: MessageType = {
        id: Date.now(),
        level: 'success',
        content: `Ссылка ${link.title} успешно удалена`
    }

    const messageErrorDelete: MessageType = {
        id: Date.now(),
        level: 'error',
        content: `Что-то пошло не так`
    }

    useEffect(() => {
        if (isSuccessDelete) {
            dispatch(showMessage(messageSuccessDelete))
        }
        if (isErrorDelete) {
            dispatch(showMessage(messageErrorDelete))
        }
    }, [isSuccessDelete, isErrorDelete])


    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <ButtonEdit document={document} />
            <Button
                size='small' icon={<BugOutlined />}
                onClick={() => {
                    try {
                        navigator.clipboard.writeText(copy)
                        dispatch(showMessage({ id: Date.now(), level: 'success', content: `Ссылка ${document.title} скопировано` }))
                    } catch (e) {
                        dispatch(showMessage({ id: Date.now(), level: 'error', content: `Что-то пошло не так` }))
                    }
                }}
            />
            <Button
                size='small' icon={<BarChartOutlined />}
            />
            <Button
                size='small'
                icon={<DeleteOutlined />}
                onClick={() => deleteLink(document)}
            />
        </div>
    )
}

export default Buttons