import { FC } from 'react'
import { Button as ButtonAntd, Form } from 'antd'
import { useHandlerMessage } from './hooks/useHandlerMessage'
import useValid from '../hooks/useValid'
import useInput from '../hooks/useInput'
import css from '../Form.module.css'

const ButtonCreate: FC = () => {
    const { offer, model, title, description, url, short } = useInput()
    const { disabled } = useValid()
    const { createLink } = useHandlerMessage()
    const onClick = () => createLink({ offer, model, title, description, url, short })
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