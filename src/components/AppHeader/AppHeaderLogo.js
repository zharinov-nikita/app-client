import React from 'react'
import css from './AppHeader.module.css'
import { Typography } from 'antd'
import { AppstoreOutlined } from '@ant-design/icons'
const { Text } = Typography

const AppHeaderLogo = () => {
    return (
        <div>
            <AppstoreOutlined className={css.icon} />
            <Text className={css.logo} children='Service' />
        </div>
    )
}

export default AppHeaderLogo