import { FC } from 'react'
import { Form, Input } from 'antd'
import useInput from '../hooks/useInput'
import css from '../Form.module.css'

const InputOffer: FC = () => {
    const { offer, onInputChange } = useInput()
    return (
        <Form.Item
            className={css.item}
            label={'offer'}
        >
            <Input
                type="text"
                placeholder={'offer'}
                name={'offer'}
                value={offer}
                onChange={onInputChange}
            />
        </Form.Item>
    )
}

export default InputOffer