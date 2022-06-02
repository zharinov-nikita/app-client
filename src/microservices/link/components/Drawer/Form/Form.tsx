import React from 'react'
import { useAppSelector } from '../../../../../hooks/redux';
import Create from './Create/Create';
import Update from './Update/Update';

const Form: React.FC = () => {
    const { action } = useAppSelector(state => state.link.form)
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