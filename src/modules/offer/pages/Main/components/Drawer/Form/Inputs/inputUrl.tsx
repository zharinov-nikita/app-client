import { FC } from 'react'
import { Form, Input } from 'antd'
import useInput from '../hooks/useInput'
import css from '../Form.module.css'
import { LinkOutlined } from '@ant-design/icons'

const InputUrl: FC = () => {
    const { url, onInputChange } = useInput()

    return (
        <Form.Item
            className={css.item}
            label={'Ссылка'}
        >
            <Input
                addonBefore={<LinkOutlined />}
                type="text"
                placeholder={'https://cloud.google.com'}
                name={'url'}
                value={url}
                onChange={onInputChange}
            />
        </Form.Item>
    )
}

export default InputUrl