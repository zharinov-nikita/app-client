import { FC } from 'react'
import css from '../Buttons.module.css'

import { BarChartOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import { LinkType } from '../../../../../../store/types/link.type'

type PropsType = {
    document: LinkType
}

const ButtonChart: FC<PropsType> = ({ document }) => {
    return (
        <Button
            className={css.button}
            size='small'
            icon={<BarChartOutlined />}
        />
    )
}

export default ButtonChart