import React from 'react'
import css from './AppHeader.module.css'
import { PageHeader } from 'antd'
import AppHeaderLogo from './AppHeaderLogo'




const AppHeader = () => {
    return (
        <PageHeader
            onBack={() => window.history.back()}
            className={css.header}
            title={<AppHeaderLogo />}
            style={{ alignItems: 'center' }}
        />
    )
}

export default AppHeader