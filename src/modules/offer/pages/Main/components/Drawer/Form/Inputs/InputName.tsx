import { FC } from 'react'
import { Form, Input } from 'antd'
import useInput from '../hooks/useInput'
import css from '../Form.module.css'

const InputName: FC = () => {
    const { name, onInputChange } = useInput()
    return (
        <Form.Item
            className={css.item}
            label={'name'}
        >
            <Input
                type="text"
                placeholder={'name'}
                name={'name'}
                value={name}
                onChange={onInputChange}
            />
        </Form.Item>
    )
}

export default InputName