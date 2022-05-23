import React, { useState } from 'react'
import { Button, Form, Input } from 'antd'

const LinkDrawerForm = () => {
    const disabled = useState(true)
    return (
        <Form layout='vertical'>
            <Form.Item label='offer' style={{ marginBottom: 8 }}>
                <Input placeholder='offer' />
            </Form.Item>
            <Form.Item label='model' style={{ marginBottom: 8 }}>
                <Input placeholder='model' />
            </Form.Item>
            <Form.Item label='title' style={{ marginBottom: 8 }}>
                <Input placeholder='title' />
            </Form.Item>
            <Form.Item label='description' style={{ marginBottom: 8 }}>
                <Input placeholder='description' />
            </Form.Item>
            <Form.Item label='url' style={{ marginBottom: 8 }}>
                <Input placeholder='url' />
            </Form.Item>
            <Form.Item label='short' style={{ marginBottom: 8 }}>
                <Input placeholder='short' />
            </Form.Item>
            <Form.Item style={{ marginBottom: 8 }}>
                <Button type='primary' children='Создать' disabled={disabled} />
            </Form.Item>
        </Form>
    )
}

export default LinkDrawerForm