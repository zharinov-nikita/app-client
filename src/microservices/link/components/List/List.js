import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Api from '../../api'
import css from './List.module.css'
import AppLayoutLoad from '../../../../components/LayoutLoad/LayoutLoad'
import AppLayoutError from '../../../../components/LayoutError/LayoutError'

import { Layout, Row } from 'antd'
import Item from '../Item/Item'
import None from '../None/None'


const List = () => {
    const isLoad = useSelector(state => state.app.isLoad)
    const isError = useSelector(state => state.app.isError)
    const links = useSelector(state => state.link.links)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(Api.get())
    }, [])


    if (isLoad) {
        return (
            <AppLayoutLoad />
        )
    }

    if (isError || links.length === 0) {
        return (
            <AppLayoutError component={<None />} />
        )
    }

    return (
        <Layout className={css.listLayout}>
            <Row gutter={[16, 16]}>
                {links.map(link => <Item key={link._id} document={link} />)}
            </Row >
        </Layout>
    )
}

export default List