
import React from 'react'

import { List, Steps, Tag, Card } from 'antd'
import { SettingOutlined } from '@ant-design/icons'

const { Step } = Steps

const Info: React.FC = () => {
    return (
        <Card title='Проект' extra={<SettingOutlined />}>
            <List grid={{ gutter: 16, column: 4 }}>
                <List.Item>
                    <Tag color='blue' children='calipso' />
                    <Tag color='blue' children='yandex' />
                    <Tag color='blue' children='сео' />
                </List.Item>
            </List>
            <Steps progressDot direction="vertical">
                <Step title="СЕО" description="Создание семантического ядра" />
                <Step title="Контент" description="Создания контента на основе семантического ядра" />
                <Step title="Интеграция" description="Интеграция с поисковыми системами" />
                <Step title="Настройка" description="Подключение доменного имени" />
                <Step title="Продвижение" description="Продвижение сайта в поисковых системах" />
            </Steps>
        </Card>
    )
}

export default Info