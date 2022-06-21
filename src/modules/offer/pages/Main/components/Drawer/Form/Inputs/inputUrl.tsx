import { FC } from 'react'
import { Form, Input } from 'antd'
import useInput from '../hooks/useInput'
import css from '../Form.module.css'

const InputUrl: FC = () => {
    const { url, onInputChange } = useInput()

    return (
        <Form.Item
            className={css.item}
            label={'url'}
        >
            <Input
                type="text"
                placeholder={'url'}
                name={'url'}
                value={url}
                onChange={onInputChange}
            />
        </Form.Item>
    )
}

export default InputUrl