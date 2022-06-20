import { FC } from 'react'
import css from './LayoutError.module.css'
import { Layout } from 'antd'

type PropsType = {
    component: React.ReactChild
}

const LayoutError: FC<PropsType> = ({ component }) => {
    return (
        <Layout className={css.loyout}>
            {component}
        </Layout>
    )
}

export default LayoutError