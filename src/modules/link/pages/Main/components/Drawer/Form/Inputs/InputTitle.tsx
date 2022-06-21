import { FC } from 'react'
import { Form, Input } from 'antd'
import useInput from '../hooks/useInput'
import css from '../Form.module.css'

const InputTitle: FC = () => {
    const { title, onInputChange } = useInput()

    return (
        <Form.Item
            className={css.item}
            label={'title'}
        >
            <Input
                type="text"
                placeholder={'title'}
                name={'title'}
                value={title}
                onChange={onInputChange}
            />
        </Form.Item>
    )
}

export default InputTitle