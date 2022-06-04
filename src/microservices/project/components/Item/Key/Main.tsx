import React from 'react'
import { Form, Input, Button } from 'antd'
import { useAppDispatch, useAppSelector } from '../../../../../hooks/redux'
import { projectSlice } from '../../../store/project'
import { MinusOutlined } from '@ant-design/icons'


const Main: React.FC = () => {
    const { value, frequency } = useAppSelector(state => state.project.seo.main)
    const { setMainKey } = projectSlice.actions
    const main = useAppSelector(state => state.project.seo.main)
    const dispatch = useAppDispatch()

    const onChangeValue = (e: { target: HTMLInputElement }) => dispatch(setMainKey({ ...main, value: e.target.value }))
    const onChangefrequency = (e: { target: HTMLInputElement }) => dispatch(setMainKey({ ...main, frequency: Number(e.target.value) }))

    return (
        <Form autoComplete="off">
            <Form.Item style={{ marginBottom: 8 }}>
                <Input.Group compact>
                    <Input
                        addonBefore={1}
                        type="text"
                        placeholder='Главный ключ'
                        value={value}
                        style={{ width: 'calc(100% - 120px)' }}
                        onChange={onChangeValue}
                    />
                    <Input
                        type='number'
                        placeholder={'Частотность'}
                        value={frequency}
                        style={{ width: 120 }}
                        onChange={onChangefrequency}
                        addonAfter={<MinusOutlined />}
                        min={0}
                    />
                </Input.Group>
            </Form.Item>
            <Form.Item>
                <Button
                    block
                    children='Сохранить ключ'
                    type='primary'
                />
            </Form.Item>
        </Form>
    )
}

export default Main