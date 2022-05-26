import React from 'react'
import { useDispatch } from 'react-redux'

import { Button, PageHeader } from 'antd'
import { linkCreateForm } from '../../reducers/actions'


const LinkHeader = () => {
    const dispatch = useDispatch()
    return (
        <PageHeader
            title="Microservice"
            subTitle="Link"
            extra={<Button
                type='primary'
                children='Создать ссылку'
                onClick={() => dispatch(linkCreateForm())}
            />}
        />
    )
}

export default LinkHeader