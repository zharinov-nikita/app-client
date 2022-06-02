import React from 'react'
import useInput from './hooks/useInput'
import useApiRequests from '../../../hooks/useApiRequests'
import useValid from './hooks/useValid'
import { useAppSelector } from '../../../../../hooks/redux'

import css from './Form.module.css'
import { Button, Input, Form as AntdForm } from 'antd'



const Create: React.FC = () => {
    const { action } = useAppSelector(state => state.link.form)
    const { createLink, updateLink } = useApiRequests()

    const { link } = useInput()
    const { onChange } = useInput()
    const { offer, model, title, description, url, short } = useInput()

    const { disabled, helpInputShort } = useValid()


    const inputs = [
        { name: 'offer', value: offer },
        { name: 'model', value: model },
        { name: 'title', value: title },
        { name: 'description', value: description },
        { name: 'url', value: url },
        { name: 'short', value: short, help: helpInputShort }
    ]

    const onClickBtn = () => (action === 'create') ? createLink(link) : updateLink(link)
    const childrenBtn = (action === 'create') ? 'создать' : 'обновить'

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
                    onClick={onClickBtn}
                    disabled={disabled} type='primary'
                    children={childrenBtn}
                />
            </AntdForm.Item>
        </AntdForm >
    )
}

export default Create