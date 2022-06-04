import React, { useEffect, useState } from 'react'
import css from './Item.module.css'
import { Button, Card, Col, Layout, Row, List, Select } from 'antd'

import { Tabs } from 'antd'
import { CaretDownOutlined } from '@ant-design/icons'
import Info from './Info/Info'
import FormI from './Create/Create'
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux'
import { projectSlice } from '../../store/project'

const { TabPane } = Tabs


const { Option } = Select









const Item: React.FC = () => {
    const [disabled, setDisabled] = useState<boolean>(false)
    const dispatch = useAppDispatch()
    const { createInput } = projectSlice.actions
    const inputs = useAppSelector(state => state.project.inputs)

    useEffect(() => {
        if (inputs.length === 1) {
            setDisabled(true)
        }
    }, [inputs])

    return (
        <Layout className={css.itemLayout}>
            <Row gutter={[16, 16]}>
                <Col span={14} xs={24} sm={24} md={24} lg={14} xl={14} xxl={14}>
                    <Card>
                        <Tabs defaultActiveKey="1">
                            <TabPane tab='Сео' key="1">
                                <List>
                                    <List.Item>
                                        <Select
                                            defaultValue="main"
                                            suffixIcon={<CaretDownOutlined />}
                                        >
                                            <Option value="main">Главный</Option>
                                            <Option value="hard">Высокочастотный</Option>
                                            <Option value="midle">Среднечастотный</Option>
                                            <Option value="low">Низкочастотный</Option>
                                        </Select>
                                        <Button children='Добавить ключ' onClick={() => dispatch(createInput({ value: 'mainKey', name: 'mainKey', frequency: '0' }))} disabled={disabled} />
                                    </List.Item>
                                </List>
                                <FormI />
                            </TabPane>
                            <TabPane tab="Контент" key="2">
                                Контент
                            </TabPane>
                            <TabPane tab="Интеграции" key="3" disabled>
                                Интеграции
                            </TabPane>
                            <TabPane tab="Настройка" key="4" disabled>
                                Настройка
                            </TabPane>
                            <TabPane tab="Продвижение" key="5" disabled>
                                Продвижение
                            </TabPane>
                        </Tabs>
                    </Card>
                </Col>
                <Col span={10} xs={24} sm={24} md={24} lg={10} xl={10} xxl={10}>
                    <Info />
                </Col>
            </Row>

        </Layout>
    )
}

export default Item