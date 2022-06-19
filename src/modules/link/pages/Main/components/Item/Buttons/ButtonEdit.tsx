import { ProjectOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import { FC } from 'react'
import { useAppDispatch } from '../../../../../../../core/hooks/useAppDispatch'
import { linkSlice } from '../../../../../store'
import { LinkType } from '../../../../../store/types/link.type'

type PropsType = {
    document: LinkType
}

const ButtonEdit: FC<PropsType> = ({ document }) => {
    const dispatch = useAppDispatch()
    const { updateForm } = linkSlice.actions
    return (
        <Button
            size='small' icon={<ProjectOutlined />}
            onClick={() => dispatch(updateForm(document))}
        />
    )
}

export default ButtonEdit