import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import BusinessItem from '../BusinessItem/BusinessItem'
import BusinessNone from '../BusinessNone/BusinessNone'

import AppLayoutLoad from '../../../../components/AppLayoutLoad/AppLayoutLoad'
import AppLayoutError from '../../../../components/AppLayoutError/AppLayoutError'

import ApiBusiness from '../../api'

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
        <div>
            {projects.map(project => <BusinessItem key={project._id} />)}
        </div>
    )
}

export default BusinessList