import React from 'react'
import { Button } from 'antd'
import { DeleteOutlined, ProjectOutlined, BugOutlined, BarChartOutlined } from '@ant-design/icons'
import { useDispatch } from 'react-redux'


import ApiLink from '../../api'
import { linkUpdateForm } from '../../store/actions'
import { appShowMessage } from '../../../../store/actions'

const LinkItemButtons = ({ document }) => {
    const { _id, offer, model, title, description, url, short } = document
    const link = { _id, offer, model, title, description, url, short }
    const dispatch = useDispatch()

    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <Button
                size='small' icon={<ProjectOutlined />}
                onClick={() => {
                    dispatch(linkUpdateForm({ ...link, action: 'update', isShort: short }))
                }}
            />
            <Button
                size='small' icon={<BugOutlined />}
                onClick={() => {
                    navigator.clipboard.writeText(`http://localhost:3030/microservice/cc/${short}`)
                    dispatch(appShowMessage({ typeMessage: 'success', contentMessage: `${title} скопировано` }))
                }}
            />
            <Button
                size='small' icon={<BarChartOutlined />}
            />
            <Button
                size='small'
                icon={<DeleteOutlined />}
                onClick={() => dispatch(ApiLink.delete(link))}
            />
        </div>
    )
}

export default LinkItemButtons