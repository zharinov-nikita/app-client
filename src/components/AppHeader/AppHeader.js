import React from 'react'
import { Button, PageHeader, Typography } from 'antd'
import { AppstoreOutlined } from '@ant-design/icons'
const { Text } = Typography

const AppHeader = () => {
    return (
        <PageHeader title={
            <div>
                <AppstoreOutlined style={{ marginRight: 4, cursor: 'pointer' }} />
                <Text children='Service' style={{ fontSize: 15, fontWeight: 700 }} />
            </div>

        }
            style={{ padding: '8px 24px' }}
        />
    )
}

export default AppHeader