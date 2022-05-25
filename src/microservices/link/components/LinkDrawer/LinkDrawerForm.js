import React from 'react'
import { useSelector } from 'react-redux'

import LinkDrawerFormCreate from './LinkDrawerFormCreate'
import LinkDrawerFormUpdate from './LinkDrawerFormUpdate'

const LinkDrawerForm = () => {
    const { action } = useSelector(state => state.link.drawer.form)

    switch (action) {
        case 'create':
            return <LinkDrawerFormCreate />
        case 'update':
            return <LinkDrawerFormUpdate />
        default:
            return <LinkDrawerFormCreate />
    }

}

export default LinkDrawerForm