import React, { useState, useEffect } from 'react'
import { Button, Input, Form as AntdForm } from 'antd'
import { useAppDispatch, useAppSelector } from '../../../../../../hooks/redux'
import useReq from '../../../../hooks/useReq'
import { linkSlice } from '../../../../store/link'

const Create: React.FC = () => {
    const [disabled, setDisabled] = useState(true)
    const { createLink, updateLink } = useReq()
    const { action, offer, model, title, description, url, short } = useAppSelector(state => state.link.form)
    const links = useAppSelector(state => state.link.links)
    const form = useAppSelector(state => state.link.form)
    const { setForm } = linkSlice.actions
    const dispatch = useAppDispatch()

    const onChangeOffer = (e: { target: HTMLInputElement }) => dispatch(setForm({ offer: e.target.value }))
    const onChangeModel = (e: { target: HTMLInputElement }) => dispatch(setForm({ model: e.target.value }))
    const onChangeTitle = (e: { target: HTMLInputElement }) => dispatch(setForm({ title: e.target.value }))
    const onChangeDescription = (e: { target: HTMLInputElement }) => dispatch(setForm({ description: e.target.value }))
    const onChangeUrl = (e: { target: HTMLInputElement }) => dispatch(setForm({ url: e.target.value }))
    const onChangeShort = (e: { target: HTMLInputElement }) => dispatch(setForm({ short: e.target.value }))


    const checkCyrilic = /[а-яА-ЯЁё]/.test(short)
    const checkEmpty = form.offer.length > 0 && form.model.length > 0 && form.title.length > 0 && form.description.length > 0 && form.url.length > 0 && form.short.length > 0
    const checkSame = links.find(link => short === link.short)

    const helpInputShort = (checkSame) && 'Уже существует' || (checkCyrilic) && 'Кириллица запрещена'


    useEffect(() => {
        if (checkEmpty && !checkCyrilic && !checkSame) {
            setDisabled(false)
        } else {
            setDisabled(true)
        }
    }, [offer, model, title, description, url, short])

    return (
        <AntdForm layout='vertical'>
            <AntdForm.Item label='offer' style={{ marginBottom: 8 }}>
                <Input type="text" value={offer} onChange={onChangeOffer} />
            </AntdForm.Item >
            <AntdForm.Item label='model' style={{ marginBottom: 8 }}>
                <Input type="text" value={model} onChange={onChangeModel} />
            </AntdForm.Item>
            <AntdForm.Item label='title' style={{ marginBottom: 8 }}>
                <Input type="text" value={title} onChange={onChangeTitle} />
            </AntdForm.Item>
            <AntdForm.Item label='description' style={{ marginBottom: 8 }}>
                <Input type="text" value={description} onChange={onChangeDescription} />
            </AntdForm.Item>
            <AntdForm.Item label='url' style={{ marginBottom: 8 }}>
                <Input type="text" value={url} onChange={onChangeUrl} />
            </AntdForm.Item>
            <AntdForm.Item label='short' style={{ marginBottom: 8 }} help={helpInputShort}>
                <Input status={(helpInputShort) ? 'error' : ''} type="text" value={short} onChange={onChangeShort} />
            </AntdForm.Item>

            <Button
                onClick={() => createLink(form)}
                disabled={disabled}
                type='primary'
            >
                создать
            </Button>
        </AntdForm>
    )
}

export default Create