import React from 'react'
import { useSelector } from 'react-redux'
import LinkDrawerFormCreate from './LinkDrawerFormCreate'
import LinkDrawerFormUpdate from './LinkDrawerFormUpdate'

const LinkDrawerForm = () => {
    const { action } = useSelector(state => state.link.drawer.form)


    if (action === 'create') {
        return (
            <LinkDrawerFormCreate />
        )
    }
    if (action === 'update') {
        return (
            <LinkDrawerFormUpdate />
        )
    }

}

export default LinkDrawerForm