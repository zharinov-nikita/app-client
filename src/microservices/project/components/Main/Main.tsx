import React, { useEffect, useState } from 'react'
import { Col, Collapse, Layout, Row, Tabs, Tag, Typography } from 'antd'
import { Badge } from 'antd'
import MainExtra from './MainExtra'
import MainHeader from './MainHeader'
import MainItem from './MainItem'
import { ProjectOutlined, SafetyCertificateOutlined } from '@ant-design/icons'
import { Content } from 'antd/lib/layout/layout'

const { TabPane } = Tabs




const Main: React.FC = () => {
    return (
        <Collapse defaultActiveKey={['1']} >
            <Collapse.Panel header={<MainHeader title='Сео' count={3} />} key="1"
                extra={<MainExtra status='завершено' />}>
                <Row gutter={[12, 12]}>
                    <MainItem task={{ number: 1, issue: 'Главный ключ', status: 'завершено', date: '02 июня - 03 июня' }} />
                    <MainItem task={{ number: 2, issue: 'Дополнительный ключ', status: 'завершено', date: '02 июня - 03 июня' }} />
                    <MainItem task={{ number: 3, issue: 'Ляля тополя', status: 'завершено', date: '02 июня - 03 июня' }} />
                </Row>
            </Collapse.Panel>
            <Collapse.Panel header={<MainHeader title='Контент' count={5} />} key="2"
                extra={<MainExtra status='работа' />} >
                <Row gutter={[12, 12]}>
                    <MainItem task={{ number: 1, issue: 'Статья #1', status: 'завершено', date: '02 июня - 03 июня' }} />
                    <MainItem task={{ number: 2, issue: 'Статья #2', status: 'работа', date: '02 июня - 03 июня' }} />
                    <MainItem task={{ number: 3, issue: 'Статья #3', status: 'запланировано', date: '02 июня - 03 июня' }} />
                    <MainItem task={{ number: 4, issue: 'Статья #4', status: 'запланировано', date: '02 июня - 03 июня' }} />
                    <MainItem task={{ number: 5, issue: 'Статья #5', status: 'запланировано', date: '02 июня - 03 июня' }} />
                </Row>
            </Collapse.Panel>
            <Collapse.Panel header={<MainHeader title='Настройки' count={2} />} key="3"
                extra={<MainExtra status='работа' />}>
                <Row gutter={[12, 12]}>
                    <MainItem task={{ number: 1, issue: 'Доменное имя', status: 'работа', date: '02 июня - 03 июня' }} />
                    <MainItem task={{ number: 2, issue: 'SSL сертификат', status: 'запланировано', date: '02 июня - 03 июня' }} />
                </Row>
            </Collapse.Panel>
            <Collapse.Panel header={<MainHeader title='Интеграции' count={4} />} key="4"
                extra={<MainExtra status='запланировано' />}>
                <Row gutter={[12, 12]}>
                    <MainItem task={{ number: 1, issue: 'Yandex', status: 'запланировано', date: '02 июня - 03 июня' }} />
                    <MainItem task={{ number: 2, issue: 'Google', status: 'запланировано', date: '02 июня - 03 июня' }} />
                    <MainItem task={{ number: 3, issue: 'Yahoo', status: 'запланировано', date: '02 июня - 03 июня' }} />
                    <MainItem task={{ number: 4, issue: 'Bing', status: 'запланировано', date: '02 июня - 03 июня' }} />
                </Row>
            </Collapse.Panel>
        </Collapse>
    )
}

export default Main