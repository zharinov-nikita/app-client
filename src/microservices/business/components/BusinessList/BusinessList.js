import React, { useEffect } from 'react'
import css from './BusinessList.module.css'
import { useDispatch, useSelector } from 'react-redux'

import BusinessItem from '../BusinessItem/BusinessItem'
import BusinessNone from '../BusinessNone/BusinessNone'

import AppLayoutLoad from '../../../../components/AppLayoutLoad/AppLayoutLoad'
import AppLayoutError from '../../../../components/AppLayoutError/AppLayoutError'

import ApiBusiness from '../../api'
import { Layout, Row } from 'antd'

const BusinessList = () => {

    const isLoad = useSelector(state => state.app.isLoad)
    const isError = useSelector(state => state.app.isError)
    const projects = useSelector(state => state.business.projects)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(ApiBusiness.getAll())
    }, [])


    if (isLoad) {
        return (
            <AppLayoutLoad />
        )
    }

    if (isError || projects.length === 0) {
        return (
            <AppLayoutError component={<BusinessNone />} />
        )
    }


    return (
        <Layout className={css.listLayout}>
            <Row gutter={[16, 16]}>
                {projects.map(project => <BusinessItem key={project._id} document={project} />)}
            </Row >
        </Layout>

    )
}

export default BusinessList