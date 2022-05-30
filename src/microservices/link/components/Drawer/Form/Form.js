import React from 'react'
import { useSelector } from 'react-redux'
import Create from './Create/Create'
import Update from './Update/Update'


const Form = () => {
    const { action } = useSelector(state => state.link.drawer.form)
    switch (action) {
        case 'create':
            return <Create />
        case 'update':
            return <Update />
        default:
            return <Create />
    }

}

export default Form