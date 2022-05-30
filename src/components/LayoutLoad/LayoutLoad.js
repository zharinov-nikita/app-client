
import React from 'react'
import css from './LayoutLoad.module.css'
import Spin from '../Spin/Spin'

import { Layout } from 'antd'


const LayoutLoad = () => {
    return (
        <Layout className={css.loyout}>
            <Spin />
        </Layout>
    )
}

export default LayoutLoad