import React, { useState } from 'react'
import { Input, Modal } from 'antd'
import { BarChartOutlined, NumberOutlined } from '@ant-design/icons'
import { useAppDispatch, useAppSelector } from '../../../../../../../hooks/redux'
import { processSlice } from '../../../../../store/process'

const MainKey: React.FC = () => {
    const modal = useAppSelector(state => state.process.mainKey)
    const { showMainKey } = processSlice.actions
    const dispatch = useAppDispatch()
    return (
        <Modal
            title="Главный ключ"
            visible={modal}
            onCancel={() => dispatch(showMainKey(false))}
            cancelText={'закрыть'}
            okText={'сохранить'}
        >
            <Input.Group>
                <Input type='text' placeholder='Главный ключ' style={{ width: 'calc(100% - 120px)' }} prefix={<BarChartOutlined />} />
                <Input type='number' placeholder='Частотность' style={{ width: 120 }} prefix={<NumberOutlined />} />
            </Input.Group>
        </Modal>
    )
}

export default MainKey