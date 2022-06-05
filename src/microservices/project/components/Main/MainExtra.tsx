import React, { useState, useEffect } from 'react'
import { Tag } from 'antd'


export type StatusColorType = 'green' | 'red' | 'orange'
export type StatusType = 'запланировано' | 'работа' | 'завершено'
export interface IStatusProps {
    status: StatusType
}

const MainExtra: React.FC<IStatusProps> = ({ status }) => {
    const [color, setColor] = useState<StatusColorType>('green')

    useEffect(() => {
        switch (status) {
            case 'запланировано':
                return setColor('orange')
            case 'работа':
                return setColor('red')
            case 'завершено':
                return setColor('green')
        }
    }, [status])

    return (
        <Tag
            children={status}
            style={{ borderRadius: 4 }}
            color={color}
        />
    )
}

export default MainExtra