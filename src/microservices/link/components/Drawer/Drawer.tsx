import { Drawer as AntdDrawer } from 'antd'
import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { linkSlice } from '../../store/link';
import Form from './Form/Form';

const Drawer: React.FC = () => {
    const { action } = useAppSelector(state => state.link.form)
    const { visible } = useAppSelector(state => state.link.drawer)
    const { hideDrawer } = linkSlice.actions
    const dispatch = useAppDispatch()

    return (
        <>
            <AntdDrawer title={(action === 'create') ? "Создать ссылку" : "Обновить ссылку"} placement="right" onClose={() => dispatch(hideDrawer())} visible={visible}>
                <Form />
            </AntdDrawer>
        </>
    );
}

export default Drawer