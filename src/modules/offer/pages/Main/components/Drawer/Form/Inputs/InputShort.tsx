import { FC } from 'react'
import { Input, Form } from 'antd'
import useInput from '../hooks/useInput'
import useValid from '../hooks/useValid'
import css from '../Form.module.css'

const InputShort: FC = () => {
    const { helpInputShort } = useValid()
    const { onInputChange, short } = useInput()
    return (
        <Form.Item
            className={css.item}
            label={'short'}
            help={helpInputShort}
            key={'short'}
        >
            <Input type="text"
                placeholder={'short'}
                status={(helpInputShort) ? 'error' : ''}
                name={'short'}
                value={short}
                onChange={onInputChange} />
        </Form.Item>
    )
}

export default InputShort