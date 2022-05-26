import React from 'react'

import LinkDrawer from './components/LinkDrawer/LinkDrawer'
import LinkList from './components/LinkList/LinkList'

import { Button } from 'antd'
import { useDispatch } from 'react-redux'
import { AppstoreAddOutlined } from '@ant-design/icons'

const AppLink = () => {
    const dispatch = useDispatch()
    return (
        <>
            <LinkDrawer />
            <LinkList />
            <div style={{ position: 'fixed', zIndex: '10', right: '2em', bottom: '2em' }}>
                <Button
                    type="danger" shape='circle' onClick={() => dispatch({ type: 'LINK_CREATE_FORM' })} icon={<AppstoreAddOutlined />} size='large' style={{ background: '#1890ff' }} />
            </div>
        </>
    )
}

export default AppLink