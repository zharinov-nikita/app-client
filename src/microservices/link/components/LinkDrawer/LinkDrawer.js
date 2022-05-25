import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Drawer } from 'antd'
import LinkDrawerForm from './LinkDrawerForm'

const LinkDrawer = () => {
    const visible = useSelector(state => state.link.drawer.visible)
    const dispatch = useDispatch()

    return (
        <Drawer
            title="Новая ссылка"
            placement="right"
            visible={visible}
            onClose={() => dispatch({ type: 'LINK_HIDE_DRAWER' })}
        >
            <LinkDrawerForm />
        </Drawer>
    )
}

export default LinkDrawer