import React from 'react'
import css from './LayoutError.module.css'
import { Layout } from 'antd'

interface IComponent {
    component: React.ReactChild
}

const LayoutError: React.FC<IComponent> = ({ component }) => {
    return (
        <Layout className={css.loyout}>
            {component}
        </Layout>
    )
}

export default LayoutError