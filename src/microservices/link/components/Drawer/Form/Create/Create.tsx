import React from 'react'
import useCreate from '../hooks/useCreate'
import useInput from '../hooks/useInput'
import useApiRequests from '../../../../hooks/useApiRequests'
import css from '../Form.module.css'
import { Button, Input, Form as AntdForm } from 'antd'


const Create: React.FC = () => {
    const { link } = useInput()
    const { offer, model, title, description, url, short } = useInput()
    const { onChange } = useInput()
    const { disabled, helpInputShort } = useCreate()
    const { createLink } = useApiRequests()





    return (
        <AntdForm layout='vertical'>
            <AntdForm.Item className={css.item} label='offer'>
                <Input type="text" name='offer' value={offer} onChange={onChange} />
            </AntdForm.Item >
            <AntdForm.Item className={css.item} label='model' >
                <Input type="text" name='model' value={model} onChange={onChange} />
            </AntdForm.Item>
            <AntdForm.Item className={css.item} label='title' >
                <Input type="text" name='title' value={title} onChange={onChange} />
            </AntdForm.Item>
            <AntdForm.Item className={css.item} label='description' >
                <Input type="text" name='description' value={description} onChange={onChange} />
            </AntdForm.Item>
            <AntdForm.Item className={css.item} label='url'>
                <Input type="text" name='url' value={url} onChange={onChange} />
            </AntdForm.Item>
            <AntdForm.Item className={css.item} label='short' help={helpInputShort}>
                <Input status={(helpInputShort) ? 'error' : ''} type="text" name='short' value={short} onChange={onChange} />
            </AntdForm.Item>
            <AntdForm.Item className={css.item}>
                <Button
                    onClick={() => createLink(link)}
                    disabled={disabled}
                    type='primary'
                    children='Создать'
                />
            </AntdForm.Item>
        </AntdForm >
    )
}

export default Create