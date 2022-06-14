import React from 'react'
import css from './List.module.css'

import { useAppSelector } from '../../../../core/hooks/redux'
import Item from './Item/Item'

import { Layout, Row } from 'antd'
import AppLayoutError from '../../../../core/components/LayotError/LayoutError'
import AppLayoutLoad from '../../../../core/components/LayotLoad/LayoutLoad'
import useInitialDataLoading from '../../../../core/hooks/useInitialDataLoading'
import api from '../../api'
import { linkSlice } from '../../store/link'
import Affix from './Affix/Affix'
import Drawer from './Drawer/Drawer'
import None from './None/None'


const List: React.FC = () => {
    const { getLinks } = linkSlice.actions
    const { isError, isLoad } = useAppSelector(state => state.app)
    const { links } = useAppSelector(state => state.link)

    useInitialDataLoading(getLinks, api.getLinks())


    if (isLoad) {
        return (
            <>
                <AppLayoutLoad />
                <Drawer />
                <Affix />
            </>
        )
    }

    if (isError || links.length === 0) {
        return (
            <>
                <AppLayoutError component={<None />} />
                <Drawer />
                <Affix />
            </>
        )
    }

    return (
        <>
            <Layout className={css.listLayout}>
                <Row gutter={[16, 16]}>
                    {links.map(link => <Item key={link._id} link={link} />)}
                </Row >
            </Layout>
            <Drawer />
            <Affix />
        </>
    )
}

export default List