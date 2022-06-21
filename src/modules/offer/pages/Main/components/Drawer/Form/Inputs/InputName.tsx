import { FC } from 'react'
import { Form, Input } from 'antd'
import useInput from '../hooks/useInput'
import css from '../Form.module.css'
import { ApiOutlined, DeploymentUnitOutlined } from '@ant-design/icons'

const InputName: FC = () => {
    const { name, onInputChange } = useInput()
    return (
        <Form.Item
            className={css.item}
            label={'Название'}
        >
            <Input
                addonBefore={<ApiOutlined />}
                type="text"
                placeholder={'Google'}
                name={'name'}
                value={name}
                onChange={onInputChange}
            />
        </Form.Item>
    )
}

export default InputName