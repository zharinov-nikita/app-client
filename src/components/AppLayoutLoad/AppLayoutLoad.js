
import React from 'react'
import css from './AppLayoutLoad.module.css'
import { Layout } from 'antd'

import AppSpin from '../AppSpin/AppSpin'

const AppLayoutLoad = () => {
    return (
        <Layout className={css.loyout}>
            <AppSpin />
        </Layout>
    )
}

export default AppLayoutLoad