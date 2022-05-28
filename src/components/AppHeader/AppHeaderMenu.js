import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Segmented, Typography } from 'antd'
import { AppleOutlined, LinkOutlined } from '@ant-design/icons'

const AppHeaderMenu = () => {

    return (
        <div style={{ display: 'flex', gap: 4 }}>
            <Link to={'/business'}>
                <Button children='business' icon={<AppleOutlined />} />
            </Link>
            <Link to={'/link'}>
                <Button children='link' icon={<LinkOutlined />} />
            </Link>
        </div>
    )
}

export default AppHeaderMenu