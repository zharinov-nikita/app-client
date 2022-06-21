import { FC } from 'react'
import { Button as ButtonAntd, Form } from 'antd'
import { useHandlerMessage } from './hooks/useHandlerMessage'
import { linkSlice } from '../../../../../../store'
import { useAppDispatch } from '../../../../../../../../core/hooks/useAppDispatch'
import useValid from '../hooks/useValid'
import useInput from '../hooks/useInput'
import css from '../Form.module.css'

const ButtonCreate: FC = () => {
    const dispatch = useAppDispatch()
    const { setForm } = linkSlice.actions
    const { offer, model, title, description, url, short } = useInput()
    const { disabled } = useValid()
    const { createLink } = useHandlerMessage()
    const onClick = () => {
        createLink({ offer, model, title, description, url, short })
        dispatch(setForm({ _id: '', offer: '', model: '', title: '', description: '', url: '', short: '' }))
    }
    return (
        <Form.Item
            className={css.item}
        >
            <ButtonAntd
                disabled={disabled}
                type='primary'
                children='Создать'
                onClick={onClick}
            />
        </Form.Item>
    )
}

export default ButtonCreate