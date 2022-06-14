import React from 'react'
import { useGetLinkQuery } from '../../../../services'
import css from './List.module.css'
import Item from '../Item/Item'

import { Layout, Row } from 'antd'
import AppLayoutError from '../../../../../../core/components/LayotError/LayoutError'
import AppLayoutLoad from '../../../../../../core/components/LayotLoad/LayoutLoad'
import Drawer from '../Drawer/Drawer'
import None from '../None/None'


const List: React.FC = () => {
    const { data: links, isError, isLoading } = useGetLinkQuery()

    if (isLoading) {
        return (
            <>
                <AppLayoutLoad />
                <Drawer />
            </>
        )
    }

    if (isError || links?.length === 0) {
        return (
            <>
                <AppLayoutError component={<None />} />
                <Drawer />
            </>
        )
    }

    return (
        <>
            <Layout className={css.listLayout}>
                <Row gutter={[16, 16]}>
                    {links && links.map(link => <Item key={link._id} link={link} />)}
                </Row >
            </Layout>
            <Drawer />
        </>
    )
}

export default List