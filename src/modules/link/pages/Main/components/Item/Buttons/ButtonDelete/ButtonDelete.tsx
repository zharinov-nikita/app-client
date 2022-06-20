import { FC } from 'react'
import css from '../Buttons.module.css'

import { DeleteOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import { LinkType } from '../../../../../../store/types/link.type'
import { useButtonDelete } from './hooks/useButtonDelete'

type PropsType = {
    document: LinkType
}

const ButtonDelete: FC<PropsType> = ({ document }) => {
    const deleteLink = useButtonDelete(document)
    return (
        <Button
            className={css.button}
            size='small'
            icon={<DeleteOutlined />}
            onClick={() => deleteLink(document)}
        />
    )
}

export default ButtonDelete