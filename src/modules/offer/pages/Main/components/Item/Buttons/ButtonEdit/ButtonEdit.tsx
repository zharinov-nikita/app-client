import { FC } from 'react'
import css from '../Buttons.module.css'

import { ProjectOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import { useAppDispatch } from '../../../../../../../../core/hooks/useAppDispatch'
import { offerSlice } from '../../../../../../store'
import { OfferType } from '../../../../../../store/types/offer.type'

type PropsType = {
    document: OfferType
}

const ButtonEdit: FC<PropsType> = ({ document }) => {
    const dispatch = useAppDispatch()
    const { updateForm } = offerSlice.actions
    return (
        <Button
            className={css.button}
            size='small'
            icon={<ProjectOutlined />}
            onClick={() => dispatch(updateForm(document))}
        />
    )
}

export default ButtonEdit