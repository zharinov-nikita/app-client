import React from 'react'
import { Form, Input, Button } from 'antd'
import { useAppDispatch, useAppSelector } from '../../../../../hooks/redux'
import { projectSlice } from '../../../store/project'


const Сreate: React.FC = () => {
    const { createMainKey, setMainKey } = projectSlice.actions
    const { value, frequency } = useAppSelector(state => state.project.seo.mainKey)
    const dispatch = useAppDispatch()


    return (
        <Form autoComplete="off">
            <Form.Item style={{ marginBottom: 8 }}>
                <Input.Group compact>
                    <Input type="text" value={value} onChange={(e) => dispatch(setMainKey(e.target.value))} style={{ width: 'calc(100% - 120px)' }} />
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