import { FC } from 'react'
import css from '../Buttons.module.css'

import { BarChartOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import { OfferType } from '../../../../../../store/types/offer.type'

type PropsType = {
    document: OfferType
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