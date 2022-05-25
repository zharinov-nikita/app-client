import React from 'react'
import { Button, PageHeader } from 'antd'

import { useDispatch } from 'react-redux'

const LinkHeader = () => {
    const dispatch = useDispatch()
    return (
        <PageHeader
            title="Microservice"
            subTitle="Link"
            extra={<Button
                type='primary'
                children='Создать ссылку'
                onClick={() => dispatch({ type: 'LINK_CREATE_FORM' })}
            />}
        />
    )
}

export default LinkHeader