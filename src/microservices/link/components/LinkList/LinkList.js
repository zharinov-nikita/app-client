import React, { useEffect } from 'react'
import css from './LinkList.module.css'

import { Layout, Row } from 'antd'
import { useDispatch, useSelector } from 'react-redux'

import ApiLink from '../../api'

import LinkItem from '../LinkItem/LinkItem'
import LinkNone from '../LinkNone/LinkNone'
import LinkSpin from '../LinkSpin/LinkSpin'


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
            <Layout className={css.loadLoyout}>
                <LinkSpin />
            </Layout>
        )
    }

    if (isError) {
        return (
            <Layout className={css.errorLayot}>
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