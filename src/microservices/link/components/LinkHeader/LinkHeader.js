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
                onClick={() => dispatch({ type: 'link/SHOW_DRAWER' })}
            />}
        />
    )
}

export default LinkHeader