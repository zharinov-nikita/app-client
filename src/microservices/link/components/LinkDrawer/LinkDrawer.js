import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Drawer } from 'antd'
import LinkDrawerForm from './LinkDrawerForm'

import { linkHideDrawer } from '../../store/actions'



const LinkDrawer = () => {
    const visible = useSelector(state => state.link.drawer.visible)
    const dispatch = useDispatch()

    return (
        <Drawer
            title="Новая ссылка"
            placement="right"
            visible={visible}
            onClose={() => dispatch(linkHideDrawer())}
        >
            <LinkDrawerForm />
        </Drawer>
    )
}

export default LinkDrawer