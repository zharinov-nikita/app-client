import React, { useEffect, useState } from 'react'
import css from './BusinessSeo.module.css'
import { Switch } from 'antd'
import { Row, Col, Card } from 'antd'
import Layout from 'antd/lib/layout/layout'

import { DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';


const BusinessSeo = () => {
    const [array, setArray] = useState(['kfdas', 'dsafk'])

    return (
        <Layout className={css.listLayout}>
            <Row gutter={[16, 16]} type="flex" align="center">
                <Col span={24} xs={24} sm={12} md={12} lg={12} xl={12} xxl={12}>
                    <Card title='Seo' extra={<Switch size='small' />}>
                        <Form name="dynamic_form_nest_item" autoComplete="off" layout='vertical'>
                            {array.map((item, index) =>
                                <Form.Item key={item}>
                                    <Input value={item} />
                                    <Button children='Удалить' />
                                </Form.Item>
                            )}
                            <Form.Item label='Высокочастотные ключи' tooltip='Высокочастотные ключи'>
                                <Button type="primary" block icon={<PlusOutlined />}  >
                                    Добавить ключ
                                </Button>
                            </Form.Item>
                        </Form>
                        <Form>
                            <Form.Item>
                                <Button type='primary' children='Сохранить' disabled />
                            </Form.Item>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </Layout >
    )
}

export default BusinessSeo