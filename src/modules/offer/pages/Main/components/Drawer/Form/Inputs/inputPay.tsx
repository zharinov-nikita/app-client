import { FC } from 'react'
import { Form, Input } from 'antd'
import useInput from '../hooks/useInput'
import css from '../Form.module.css'

const InputPay: FC = () => {
    const { pay, onInputChange } = useInput()
    return (
        <Form.Item
            className={css.item}
            label={'pay'}
        >
            <Input
                type="text"
                placeholder={'pay'}
                name={'pay'}
                value={pay}
                onChange={onInputChange}
            />
        </Form.Item>
    )
}

export default InputPay