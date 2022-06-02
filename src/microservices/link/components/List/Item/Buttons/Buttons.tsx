import React from 'react'

import { Button } from 'antd'
import { DeleteOutlined, ProjectOutlined, BugOutlined, BarChartOutlined } from '@ant-design/icons'
import { ILink } from '../../../../interfaces/link'
import useReq from '../../../../hooks/useReq'
import { useAppDispatch } from '../../../../../../hooks/redux'
import { linkSlice } from '../../../../store/link'
import { appSlice } from '../../../../../../store/app'

interface IDocumentProps {
    document: ILink
}


const Buttons: React.FC<IDocumentProps> = ({ document }) => {
    const { _id, offer, model, title, description, url, short } = document
    const link = { _id, offer, model, title, description, url, short }
    const copy = `http://localhost:3030/microservice/cc/${short}`
    const { deleteLink } = useReq()
    const { showMessage } = appSlice.actions
    const { updateForm } = linkSlice.actions
    const dispatch = useAppDispatch()

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