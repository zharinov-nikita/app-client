import { FC } from 'react'
import css from '../Buttons.module.css'

import { DeleteOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import { OfferType } from '../../../../../../store/types/offer.type'
import { useButtonDelete } from './hooks/useButtonDelete'

type PropsType = {
    document: OfferType
}

const ButtonDelete: FC<PropsType> = ({ document }) => {
    const deleteOffer = useButtonDelete(document)
    return (
        <Button
            className={css.button}
            size='small'
            icon={<DeleteOutlined />}
            onClick={() => deleteOffer(document)}
        />
    )
}

export default ButtonDelete