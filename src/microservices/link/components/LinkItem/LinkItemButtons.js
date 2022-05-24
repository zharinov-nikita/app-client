import React from 'react'
import { Button } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'

const LinkItemButtons = () => {
    return (
        <div>
            <Button size='small' children={<DeleteOutlined />} />
        </div>
    )
}

export default LinkItemButtons