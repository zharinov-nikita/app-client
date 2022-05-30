import React from 'react'
import { Spin as AntdSpin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'

const Spin = () => {
    return (
        <AntdSpin indicator={<LoadingOutlined />} size='large' />
    )
}

export default Spin