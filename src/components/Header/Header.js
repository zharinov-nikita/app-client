import React from 'react'
import css from './Header.module.css'
import Logo from './Logo/Logo'

import { PageHeader } from 'antd'





const Header = () => {
    return (
        <PageHeader
            onBack={() => window.history.back()}
            className={css.header}
            title={<Logo />}
            style={{ alignItems: 'center' }}
        />
    )
}

export default Header