import React from 'react'
import css from '../Header.module.css'
import { Typography } from 'antd'
import { AppstoreOutlined } from '@ant-design/icons'
const { Text } = Typography

const Logo: React.FC = () => {
    return (
        <div>
            <AppstoreOutlined className={css.icon} />
            <Text className={css.logo} children='Service' />
        </div>
    )
}

export default Logo