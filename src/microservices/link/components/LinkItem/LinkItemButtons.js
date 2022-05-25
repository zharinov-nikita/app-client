import React from 'react'
import { Button } from 'antd'
import { DeleteOutlined, ProjectOutlined } from '@ant-design/icons'
import { useDispatch } from 'react-redux'


import ApiLink from '../../api'

const LinkItemButtons = ({ document }) => {

    const { _id, offer, model, title, description, url, short } = document
    const link = { _id, offer, model, title, description, url, short }
    const dispatch = useDispatch()

    return (
        <div>
            <Button
                size='small' children={<ProjectOutlined />}
                onClick={() => {
                    dispatch({
                        type: 'LINK_UPDATE_FORM',
                        ...link,
                        action: 'update',
                        isShort: short
                    })
                }}

            />
            <Button
                size='small'
                children={<DeleteOutlined />}
                onClick={() => dispatch(ApiLink.delete(_id))}
            />
        </div>
    )
}

export default LinkItemButtons