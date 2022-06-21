import { FC } from 'react'
import { Form, Input } from 'antd'
import useInput from '../hooks/useInput'
import css from '../Form.module.css'

const InputDescription: FC = () => {
    const { description, onInputChange } = useInput()
    return (
        <Form.Item
            className={css.item}
            label={'description'}
        >
            <Input
                type="text"
                placeholder={'description'}
                name={'description'}
                value={description}
                onChange={onInputChange}
            />
        </Form.Item>
    )
}

export default InputDescription