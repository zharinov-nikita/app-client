import React from 'react'
import css from './Buttons.module.css'

import { OfferType } from '../../../../../store/types/offer.type'
import ButtonEdit from './ButtonEdit/ButtonEdit'
import ButtonCopy from './ButtonCopy/ButtonCopy'
import ButtonChart from './ButtonChart/ButtonChart'
import ButtonDelete from './ButtonDelete/ButtonDelete'

type PropsType = {
    document: OfferType
}

const Buttons: React.FC<PropsType> = ({ document }) => {
    return (
        <div className={css.buttons}>
            <ButtonEdit document={document} />
            <ButtonCopy document={document} />
            <ButtonChart document={document} />
            <ButtonDelete document={document} />
        </div>
    )
}

export default Buttons