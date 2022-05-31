import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Api from '../../api'
import css from './List.module.css'
import AppLayoutLoad from '../../../../components/LayoutLoad/LayoutLoad'
import AppLayoutError from '../../../../components/LayoutError/LayoutError'

import { Layout, Row } from 'antd'
import Item from '../Item/Item'
import None from '../None/None'
import useRequest from '../../../../hooks/useRequest'
import { linkGetLinks } from '../../store/actions'



const List = () => {
    const links = useSelector(state => state.link.links)
    const dispatch = useDispatch()

    const { isLoad, isError } = useRequest(async () => {
        const req = await Api.get()
        dispatch(linkGetLinks(req))
    })


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