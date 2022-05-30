import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { linkHideDrawer } from '../../store/actions'
import Form from './Form/Form'

import { Drawer as AntdDrawer } from 'antd'




const Drawer = () => {
    const { action, title } = useSelector(state => state.link.drawer.form)
    const visible = useSelector(state => state.link.drawer.visible)
    const dispatch = useDispatch()

    return (
        <AntdDrawer
            title={(action === 'create') ? 'Новая ссылка' : title}
            placement="right"
            visible={visible}
            onClose={() => dispatch(linkHideDrawer())}
        >
            <Form />
        </AntdDrawer>
    )
}

export default Drawer