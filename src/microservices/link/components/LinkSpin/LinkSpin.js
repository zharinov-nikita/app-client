import React from 'react'
import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'

const LinkSpin = () => {
    return (
        <Spin indicator={<LoadingOutlined />} size='large' />
    )
}

export default LinkSpin