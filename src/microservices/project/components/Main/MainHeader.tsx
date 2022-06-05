import React from 'react'
import { Badge, Typography } from 'antd'

type PropsType = {
    title: string
    count: string | number
}

const MainHeader: React.FC<PropsType> = ({ title, count }) => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <Typography.Text children={title} strong />
            <Badge count={count} size='small' />
        </div>
    )
}

export default MainHeader