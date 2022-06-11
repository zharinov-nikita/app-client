import React, { useState } from 'react'
import { Input, Modal } from 'antd'
import { BarChartOutlined, NumberOutlined } from '@ant-design/icons'
import { useAppDispatch, useAppSelector } from '../../../../../../../hooks/redux'
import { processSlice } from '../../../../../store/process'

const MainKey: React.FC = () => {
    const mainKey = useAppSelector(state => state.process.mainKey)
    const { showMainKey, updateMainKey } = processSlice.actions
    const dispatch = useAppDispatch()
    return (
        <Modal
            title="Главный ключ"
            visible={mainKey.visible}
            onCancel={() => dispatch(showMainKey({ ...mainKey, visible: false }))}
            cancelText={'закрыть'}
            okText={'сохранить'}
        >
            <Input.Group>
                <Input
                    onChange={(e: { target: HTMLInputElement }) => dispatch(updateMainKey({ ...mainKey, value: e.target.value }))}
                    value={mainKey.value}
                    type='text'
                    placeholder='Главный ключ'
                    style={{ width: 'calc(100% - 120px)' }}
                    prefix={<BarChartOutlined />}
                />
                <Input
                    onChange={(e: { target: HTMLInputElement }) => dispatch(updateMainKey({ ...mainKey, number: Number(e.target.value) }))}
                    value={mainKey.number}
                    type='number'
                    placeholder='Частотность'
                    style={{ width: 120 }}
                    prefix={<NumberOutlined />}
                    min={0}
                />
            </Input.Group>
        </Modal>
    )
}

export default MainKey