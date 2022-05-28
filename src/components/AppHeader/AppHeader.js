import React from 'react'
import css from './AppHeader.module.css'
import { PageHeader } from 'antd'
import AppHeaderLogo from './AppHeaderLogo'
import AppHeaderMenu from './AppHeaderMenu'




const AppHeader = () => {
    return (
        <PageHeader
            onBack={() => window.history.back()}
            className={css.header}
            title={<AppHeaderLogo />}
            extra={<AppHeaderMenu />}
            style={{ alignItems: 'center' }}
        />
    )
}

export default AppHeader