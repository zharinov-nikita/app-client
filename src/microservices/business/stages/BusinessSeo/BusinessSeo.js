import React, { useEffect, useState } from 'react'
import css from './BusinessSeo.module.css'
import { Button, Form, Input, Switch } from 'antd'
import { Row, Col, Card } from 'antd'
import Layout from 'antd/lib/layout/layout'
import TextArea from 'antd/lib/input/TextArea'





const BusinessSeo = () => {
    const [disabled, setDisabled] = useState(true)
    const [object, setObject] = useState({
        mainKey: '',
        highFrequencyKeys: [],
        midFrequencyKeys: [],
        lowFrequencyKeys: [],
    })

    const [form, setForm] = useState({ mainKey: '', highFrequencyKeys: '', midFrequencyKeys: '', lowFrequencyKeys: '' })

    useEffect(() => {
        if (form.mainKey) {
            setObject({ ...object, mainKey: form.mainKey })
        }
        if (form.highFrequencyKeys) {
            setObject({ ...object, highFrequencyKeys: form.highFrequencyKeys.split('\n') })
        }
        if (form.midFrequencyKeys) {
            setObject({ ...object, midFrequencyKeys: form.midFrequencyKeys.split('\n') })
        }
        if (form.lowFrequencyKeys) {
            setObject({ ...object, lowFrequencyKeys: form.lowFrequencyKeys.split('\n') })
        }
    }, [form.mainKey, form.highFrequencyKeys, form.midFrequencyKeys, form.lowFrequencyKeys])

    return (
        <Layout className={css.listLayout}>
            <Row gutter={[16, 16]} type="flex" align="center">
                <Col span={24} xs={24} sm={12} md={12} lg={12} xl={12} xxl={12}>
                    <Card title='Seo' extra={<Switch size='small' onChange={() => setDisabled(!disabled)} />}>
                        <Form layout='vertical' style={{ marginBottom: 8 }}>
                            <Form.Item label="Главный ключ" tooltip="mainKey">
                                <Input value={form.mainKey} onChange={(e) => setForm({ ...form, mainKey: e.target.value })} disabled={disabled} />
                            </Form.Item>
                        </Form>
                        <Form layout='vertical' style={{ marginBottom: 8 }} >
                            <Form.Item label="Высокочастотный ключ" tooltip="highFrequencyKeys">
                                <TextArea style={{ minHeight: 200 }} value={form.highFrequencyKeys} onChange={(e) => setForm({ ...form, highFrequencyKeys: e.target.value })} disabled={disabled} />
                            </Form.Item>
                        </Form>
                        <Form layout='vertical' style={{ marginBottom: 8 }}>
                            <Form.Item label="Среднечастотные ключ" tooltip="midFrequencyKeys">
                                <TextArea style={{ minHeight: 200 }} value={form.midFrequencyKeys} onChange={(e) => setForm({ ...form, midFrequencyKeys: e.target.value })} disabled={disabled} />
                            </Form.Item>
                        </Form>
                        <Form layout='vertical' style={{ marginBottom: 8 }} >
                            <Form.Item label="Низкочастотный ключ" tooltip="lowFrequencyKeys">
                                <TextArea style={{ minHeight: 200 }} value={form.lowFrequencyKeys} onChange={(e) => setForm({ ...form, lowFrequencyKeys: e.target.value })} disabled={disabled} />
                            </Form.Item>
                        </Form>
                        <Form layout='vertical' style={{ marginBottom: 8 }} >
                            <Form.Item>
                                <Button type='primary' children='Сохранить ключи' onClick={() => console.log(object)} />
                            </Form.Item>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </Layout >
    )
}

export default BusinessSeo