import React from 'react'
import { Button, Input, Modal } from 'antd'
import { BarChartOutlined, DeleteOutlined, NumberOutlined } from '@ant-design/icons'
import { useAppDispatch, useAppSelector } from '../../../../../../../hooks/redux'
import { processSlice } from '../../../../../store/process'

const ExtraKey: React.FC = () => {
    const extraKey = useAppSelector(state => state.process.extraKey)
    const {
        showExtraKey,
        updateExtraKey,
        createExtraKey,
        deleteExtraKey
    } = processSlice.actions
    const dispatch = useAppDispatch()


    return (
        <Modal
            title="Дополнительный ключ"
            visible={extraKey.visible}
            onCancel={() => dispatch(showExtraKey({ ...extraKey, visible: false }))}
            cancelText={'закрыть'}
            okText={'сохранить'}
        >
            {extraKey.keys.map(key =>
                <Input.Group key={key.id} style={{ marginBottom: 8 }}>
                    <Input
                        onChange={(e: { target: HTMLInputElement }) => dispatch(updateExtraKey({ ...key, value: e.target.value }))}
                        value={key.value}
                        type='text'
                        placeholder='Дополнительный ключ'
                        style={{ width: 'calc(100% - 164px)' }}
                        prefix={<BarChartOutlined />}
                    />
                    <Input
                        onChange={(e: { target: HTMLInputElement }) => dispatch(updateExtraKey({ ...key, number: Number(e.target.value) }))}
                        value={key.number}
                        type='number'
                        placeholder='Частотность'
                        style={{ width: 120 }}
                        prefix={<NumberOutlined />}
                        min={0}
                    />
                    <Button
                        onClick={() => dispatch(deleteExtraKey(key))}
                        icon={<DeleteOutlined />}
                        style={{ marginLeft: 4, width: 40 }}
                    />
                </Input.Group>
            )}
            <Button
                onClick={() => dispatch(createExtraKey({ id: Date.now(), value: 'Дополнительный ключ', number: 0 }))}
                block
                children='Добавить ключ'
                type='primary'
            />

        </Modal>
    )
}

export default ExtraKey