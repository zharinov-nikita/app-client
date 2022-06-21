import { FC } from 'react'
import { Form, Input } from 'antd'
import useInput from '../hooks/useInput'
import css from '../Form.module.css'

const InputType: FC = () => {
    const { type, onInputChange } = useInput()

    return (
        <Form.Item
            className={css.item}
            label={'type'}
        >
            <Input
                type="text"
                placeholder={'type'}
                name={'type'}
                value={type}
                onChange={onInputChange}
            />
        </Form.Item>
    )
}

export default InputType