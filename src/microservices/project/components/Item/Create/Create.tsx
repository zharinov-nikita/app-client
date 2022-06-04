import React from 'react'
import { Form, Input, Button } from 'antd'
import { useAppSelector } from '../../../../../hooks/redux'


const Сreate: React.FC = () => {
    const inputs = useAppSelector(state => state.project.inputs)


    return (
        <Form name="" autoComplete="off">
            {inputs.map(({ name, value, frequency }) =>
                <Form.Item style={{ marginBottom: 8 }}>
                    <Input.Group compact>
                        <Input type='text' name={name} value={value} placeholder={'Название ключа'} style={{ width: 'calc(100% - 120px)' }} />
                        <Input type='number' style={{ width: 120 }} placeholder={'Частотность'} value={frequency} />
                    </Input.Group>
                </Form.Item>
            )}
            <Form.Item>
                <Button block children='Сохранить ключ' type='primary' />
            </Form.Item>
        </Form>
    )
}

export default Сreate