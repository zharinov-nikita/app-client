import React from 'react'
import { useGetOfferQuery } from '../../../../services'
import css from './List.module.css'
import Item from '../Item/Item'

import { Layout, Row } from 'antd'
import AppLayoutError from '../../../../../../core/components/LayotError/LayoutError'
import AppLayoutLoad from '../../../../../../core/components/LayotLoad/LayoutLoad'
import Drawer from '../Drawer/Drawer'
import None from '../None/None'


const List: React.FC = () => {
    const { data: offers, isError, isLoading } = useGetOfferQuery()

    if (isLoading) {
        return (
            <>
                <AppLayoutLoad />
                <Drawer />
            </>
        )
    }

    if (isError || offers?.length === 0) {
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
                    {offers && offers.map(offer => <Item key={offer._id} offer={offer} />)}
                </Row >
            </Layout>
            <Drawer />
        </>
    )
}

export default List