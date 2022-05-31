import React from 'react'
import { useDispatch } from 'react-redux'
import { linkUpdateForm } from '../../../store/actions'
import { appShowMessage } from '../../../../../store/actions'
import Api from '../../../api'

import { Button } from 'antd'
import { DeleteOutlined, ProjectOutlined, BugOutlined, BarChartOutlined } from '@ant-design/icons'



const Buttons = ({ document }) => {
    const { _id, offer, model, title, description, url, short } = document
    const link = { _id, offer, model, title, description, url, short }
    const copy = `http://localhost:3030/microservice/cc/${short}`
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
                    navigator.clipboard.writeText(copy)
                    dispatch(appShowMessage({ id: Date.now(), level: 'success', content: `${title} скопировано` }))
                }}
            />
            <Button
                size='small' icon={<BarChartOutlined />}
            />
            <Button
                size='small'
                icon={<DeleteOutlined />}
                onClick={() => dispatch(Api.delete(link))}
            />
        </div>
    )
}

export default Buttons