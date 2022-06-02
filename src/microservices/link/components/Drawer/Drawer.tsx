import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux'
import { linkSlice } from '../../store/link'
import { Drawer as AntdDrawer } from 'antd'
import Form from './Form/Form'

const Drawer: React.FC = () => {
    const { action } = useAppSelector(state => state.link.form)
    const { visible } = useAppSelector(state => state.link.drawer)
    const { hideDrawer } = linkSlice.actions
    const dispatch = useAppDispatch()

    const onClose = () => dispatch(hideDrawer())
    const title = (action === 'create') ? "Создать ссылку" : "Обновить ссылку"

    return (
        <>
            <AntdDrawer
                title={title}
                placement="right"
                onClose={onClose}
                visible={visible}
            >
                <Form />
            </AntdDrawer>
        </>
    )
}

export default Drawer