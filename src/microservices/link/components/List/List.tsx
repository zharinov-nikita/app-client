import React from 'react'
import css from './List.module.css'

import { useAppSelector } from '../../../../hooks/redux'
import useInitialDataLoading from '../../hooks/useInitialDataLoading'
import Item from './Item/Item'

import AppLayoutError from '../../../../components/LayotError/LayoutError'
import AppLayoutLoad from '../../../../components/LayotLoad/LayoutLoad'
import None from './None/None'
import { Layout, Row } from 'antd'


const List: React.FC = () => {

    const { isError, isLoad } = useAppSelector(state => state.app)
    const { links } = useAppSelector(state => state.link)

    useInitialDataLoading()


    if (isLoad) {
        return <AppLayoutLoad />
    }

    if (isError || links.length === 0) {
        return (
            <>
                <AppLayoutError component={<None />} />
            </>
        )
    }

    return (
        <Layout className={css.listLayout}>
            <Row gutter={[16, 16]}>
                {links.map(link => <Item key={link._id} link={link} />)}
            </Row >
        </Layout>
    )
}

export default List