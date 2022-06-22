import { FC } from 'react'
import { useAppSelector } from '../../../../../../../../core/hooks/useAppSelector'
import { Form } from 'antd'
import ButtonCreate from './ButtonCreate'
import ButtonUpdate from './ButtonUpdate'
import css from '../Form.module.css'

const Button: FC = () => {
    const { action } = useAppSelector(state => state.offer.form)
    return (
        <Form.Item className={css.item}>
            {(action === 'create') && <ButtonCreate />}
            {(action === 'update') && <ButtonUpdate />}
        </Form.Item>
    )
}

export default Button