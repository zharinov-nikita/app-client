import { FC } from 'react'
import { Button as ButtonAntd, Form } from 'antd'
import { useHandlerMessage } from './hooks/useHandlerMessage'
import useValid from '../hooks/useValid'
import useInput from '../hooks/useInput'
import css from '../Form.module.css'

const ButtonUpdate: FC = () => {
    const { offer } = useInput()
    const { disabled } = useValid()
    const { updateOffer } = useHandlerMessage()
    const onClick = () => updateOffer(offer)
    return (
        <Form.Item
            className={css.item}
        >
            <ButtonAntd
                disabled={disabled}
                type='primary'
                children='Обновить'
                onClick={onClick}
            />
        </Form.Item>
    )
}

export default ButtonUpdate