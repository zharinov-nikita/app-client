import React from 'react'
import { Button } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'
import { useDispatch } from 'react-redux'


import ApiLink from '../../api'

const LinkItemButtons = ({ _id }) => {
    const dispatch = useDispatch()
    return (
        <div>
            <Button
                size='small' children={<DeleteOutlined />}
                onClick={() => dispatch(ApiLink.delete(_id))}
            />
        </div>
    )
}

export default LinkItemButtons