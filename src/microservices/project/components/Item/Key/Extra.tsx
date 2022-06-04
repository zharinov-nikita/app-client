import React from 'react'
import { Form, Input, Button } from 'antd'
import { useAppDispatch, useAppSelector } from '../../../../../hooks/redux'
import { MinusOutlined } from '@ant-design/icons'
import { projectSlice } from '../../../store/project'
import { IKey } from '../../../interfaces/project'
import { keyboard } from '@testing-library/user-event/dist/keyboard'


const Extra: React.FC = () => {
    const { setExtraKey, deleteExtraKey } = projectSlice.actions
    const extra = useAppSelector(state => state.project.seo.extra)
    const dispatch = useAppDispatch()


    return (
        <Form autoComplete="off">
            {extra.map((key, index) =>
                <Form.Item style={{ marginBottom: 8 }} key={key.id}>
                    <Input.Group compact>
                        <Input
                            addonBefore={index + 1}
                            type="text"
                            placeholder={`Дополнительный ключ ${index + 1}`}
                            value={key.value}
                            style={{ width: 'calc(100% - 120px)' }}
                            onChange={(e) => dispatch(setExtraKey({ ...key, value: e.target.value }))}
                        />
                        <Input
                            type='number'
                            style={{ width: 120 }}
                            placeholder={'Частотность'}
                            value={key.frequency}
                            onChange={(e) => dispatch(setExtraKey({ ...key, frequency: Number(e.target.value) }))}
                            addonAfter={<MinusOutlined onClick={() => dispatch(deleteExtraKey(key))} />}
                            min={0}
                        />
                    </Input.Group>
                </Form.Item>
            )}
            <Form.Item>
                <Button
                    block
                    children='Сохранить ключи'
                    type='primary'
                />
            </Form.Item>
        </Form>
    )
}

export default Extra