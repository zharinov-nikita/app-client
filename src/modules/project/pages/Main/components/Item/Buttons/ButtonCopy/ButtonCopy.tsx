import { FC } from 'react'
import css from '../Buttons.module.css'

import { BugOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import { OfferType } from '../../../../../../store/types/offer.type'
import { useButtonCopy } from './hooks/useButtonCopy'


type PropsType = {
    document: OfferType
}

const ButtonCopy: FC<PropsType> = ({ document }) => {
    const { handlerCopy } = useButtonCopy(document)
    return (
        <Button
            className={css.button}
            size='small'
            icon={<BugOutlined />}
            onClick={handlerCopy}
        />
    )
}

export default ButtonCopy