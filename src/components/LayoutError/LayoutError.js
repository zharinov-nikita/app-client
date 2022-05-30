
import React from 'react'
import css from './LayoutError.module.css'

import { Layout } from 'antd'

const LayoutError = ({ component }) => {
    return (
        <Layout className={css.loyout}>
            {component}
        </Layout>
    )
}

export default LayoutError