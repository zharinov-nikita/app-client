import React from 'react'
import { Form, Input, Button } from 'antd'
import { useAppDispatch, useAppSelector } from '../../../../../hooks/redux'
import { projectSlice } from '../../../store/project'


const Сreate: React.FC = () => {
    const dispatch = useAppDispatch()
    const { createMainKey } = projectSlice.actions
    const { name, value, frequency } = useAppSelector(state => state.project.seo.mainKey)

    return (
        <Form autoComplete="off">
            <Form.Item style={{ marginBottom: 8 }} key={Date.now()}>
                <Input.Group compact>
                    <Input type='text' name={name} value={value} placeholder={'Название ключа'} style={{ width: 'calc(100% - 120px)' }} />
                    <Input type='number' style={{ width: 120 }} placeholder={'Частотность'} value={frequency} />
                </Input.Group>
            </Form.Item>
            <Form.Item>
                <Button
                    block
                    children='Сохранить ключи'
                    type='primary'
                    onClick={() => dispatch(createMainKey({ name: 'mainKey', value: 'mainKey', frequency: '120' }))}
                />
            </Form.Item>
        </Form>
    )
}

export default Сreate