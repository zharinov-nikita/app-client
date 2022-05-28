
import React from 'react'
import css from './AppLayoutError.module.css'
import { Layout } from 'antd'

const AppLayoutError = ({ component }) => {
    return (
        <Layout className={css.loyout}>
            {component}
        </Layout>
    )
}

export default AppLayoutError