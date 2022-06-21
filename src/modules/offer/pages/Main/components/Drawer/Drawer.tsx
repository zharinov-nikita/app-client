import { FC } from 'react'
import { useAppDispatch } from '../../../../../../core/hooks/useAppDispatch'
import { useAppSelector } from '../../../../../../core/hooks/useAppSelector'
import { offerSlice } from '../../../../store'
import { Drawer as AntdDrawer } from 'antd'
import Form from './Form/Form'


const Drawer: FC = () => {
    const { action } = useAppSelector(state => state.offer.form)
    const { visible } = useAppSelector(state => state.offer.drawer)
    const { hideDrawer } = offerSlice.actions
    const dispatch = useAppDispatch()
    const onClose = () => dispatch(hideDrawer())
    const title = (action === 'create') ? "Новый оффер" : "Обновить оффер"

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