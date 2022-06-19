import React, { useEffect } from 'react'

import { Button } from 'antd'
import { DeleteOutlined, ProjectOutlined, BugOutlined, BarChartOutlined } from '@ant-design/icons'
import { LinkType } from '../../../../../store/types/link.type'
import { useAppDispatch } from '../../../../../../../core/hooks/useAppDispatch'
import { linkSlice } from '../../../../../store'
import { appSlice } from '../../../../../../../core/store'
import { useDeleteLinkMutation } from '../../../../../services'

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


    useEffect(() => {
        if (isSuccessDelete) {
            dispatch(showMessage({ id: Date.now(), level: 'success', content: `Ссылка ${link.title} успешно удалена` }))
        }
        if (isErrorDelete) {
            dispatch(showMessage({ id: Date.now(), level: 'error', content: `Что-то пошло не так` }))
        }
    }, [isSuccessDelete, isErrorDelete])


    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <Button
                size='small' icon={<ProjectOutlined />}
                onClick={() => dispatch(updateForm(link))}
            />
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