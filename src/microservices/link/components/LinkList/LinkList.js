import React, { useEffect } from 'react'
import css from './LinkList.module.css'

import { Layout, Row } from 'antd'
import { useDispatch, useSelector } from 'react-redux'

import LinkItem from '../LinkItem/LinkItem'
import LinkNone from '../LinkNone/LinkNone'


import ApiLink from '../../api'
import AppLayoutLoad from '../../../../components/AppLayoutLoad/AppLayoutLoad'
import AppLayoutError from '../../../../components/AppLayoutError/AppLayoutError'


const LinkList = () => {
    const isLoad = useSelector(state => state.app.isLoad)
    const isError = useSelector(state => state.app.isError)
    const links = useSelector(state => state.link.links)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(ApiLink.get())
    }, [])


    if (isLoad) {
        return (
            <AppLayoutLoad />
        )
    }

    if (isError || links.length === 0) {
        return (
            <AppLayoutError component={<LinkNone />} />
        )
    }

    return (
        <Layout className={css.listLayout}>
            <Row gutter={[16, 16]}>
                {links.map(link => <LinkItem key={link._id} document={link} />)}
            </Row >
        </Layout>
    )
}

export default LinkList