import { FC } from 'react'
import css from '../Buttons.module.css'

import { BugOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import { LinkType } from '../../../../../../store/types/link.type'
import { useButtonCopy } from './hooks/useButtonCopy'


type PropsType = {
    document: LinkType
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