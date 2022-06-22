import { FC } from 'react'
import { Button as ButtonAntd, Form } from 'antd'
import { useHandlerMessage } from './hooks/useHandlerMessage'
import useValid from '../hooks/useValid'
import useInput from '../hooks/useInput'
import css from '../Form.module.css'

const ButtonCreate: FC = () => {
    const { name, model, type, pay, url, short } = useInput()
    const { disabled } = useValid()
    const { createOffer } = useHandlerMessage()

    const onClick = () => createOffer({ name, model, type, pay, url, short })

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