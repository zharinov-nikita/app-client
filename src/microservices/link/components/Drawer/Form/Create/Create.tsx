import React from 'react'
import useCreate from '../hooks/useCreate'
import useInput from '../hooks/useInput'
import useApiRequests from '../../../../hooks/useApiRequests'
import css from '../Form.module.css'
import { Button, Input, Form as AntdForm } from 'antd'


const Create: React.FC = () => {
    const { link } = useInput()
    const { onChange } = useInput()
    const { offer, model, title, description, url, short } = useInput()
    const { disabled, helpInputShort } = useCreate()
    const { createLink } = useApiRequests()

    const inputs = [
        { name: 'offer', value: offer },
        { name: 'model', value: model },
        { name: 'title', value: title },
        { name: 'description', value: description },
        { name: 'url', value: url },
        { name: 'short', value: short, help: helpInputShort }
    ]

    return (
        <AntdForm layout='vertical'>
            {inputs.map(input =>
                <AntdForm.Item
                    className={css.item}
                    label={input.name}
                    help={input.help}
                >
                    <Input
                        type="text"
                        placeholder={input.name}
                        status={(helpInputShort) ? 'error' : ''}
                        name={input.name}
                        value={input.value}
                        onChange={onChange}
                    />
                </AntdForm.Item>
            )}
            <AntdForm.Item className={css.item}>
                <Button
                    onClick={() => createLink(link)}
                    disabled={disabled} type='primary'
                    children='Создать'
                />
            </AntdForm.Item>
        </AntdForm >
    )
}

export default Create