import { FC } from 'react'
import { Form, Input } from 'antd'
import useInput from '../hooks/useInput'
import css from '../Form.module.css'
import { ExceptionOutlined } from '@ant-design/icons'

const InputType: FC = () => {
    const { type, onInputChange } = useInput()

    return (
        <Form.Item
            className={css.item}
            label={'Тип'}
        >
            <Input
                type="text"
                placeholder={'Cloud'}
                name={'type'}
                value={type}
                onChange={onInputChange}
                addonBefore={<ExceptionOutlined />}
            />
        </Form.Item>
    )
}

export default InputType