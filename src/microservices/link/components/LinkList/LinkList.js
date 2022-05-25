import React, { useEffect } from 'react'
import css from './LinkList.module.css'

import { Layout, Row } from 'antd'
import { useDispatch, useSelector } from 'react-redux'

import LinkItem from '../LinkItem/LinkItem'
import LinkNone from '../LinkNone/LinkNone'
import LinkSpin from '../LinkSpin/LinkSpin'

import ApiLink from '../../api'


const LinkList = () => {
    const isLoad = useSelector(state => state.link.isLoad)
    const isError = useSelector(state => state.link.isError)
    const links = useSelector(state => state.link.links)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(ApiLink.get())
    }, [])


    if (isLoad) {
        return (
            <Layout className={css.loyout}>
                <LinkSpin />
            </Layout>
        )
    }

    if (isError || links.length === 0) {
        return (
            <Layout className={css.loyout}>
                <LinkNone />
            </Layout>
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