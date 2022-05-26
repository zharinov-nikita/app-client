import React from 'react'
import css from './AppHeader.module.css'
import { PageHeader } from 'antd'
import AppHeaderLogo from './AppHeaderLogo'


const AppHeader = () => {
    return (
        <PageHeader
            className={css.header}
            title={<AppHeaderLogo />}
        />
    )
}

export default AppHeader