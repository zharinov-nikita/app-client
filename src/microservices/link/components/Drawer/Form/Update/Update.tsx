import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../../../../hooks/redux'
import useApiRequests from '../../../../hooks/useApiRequests'
import { linkSlice } from '../../../../store/link'
import css from '../Form.module.css'
import { Button, Input, Form as AntdForm } from 'antd'
import useUpdate from '../hooks/useUpdate'


const Update: React.FC = () => {
    const { disabled, helpInputShort } = useUpdate()
    const { updateLink } = useApiRequests()
    const { offer, model, title, description, url, short } = useAppSelector(state => state.link.form)
    const link = useAppSelector(state => state.link.form)
    const { setForm } = linkSlice.actions
    const dispatch = useAppDispatch()

    const onChangeOffer = (e: { target: HTMLInputElement }) => dispatch(setForm({ offer: e.target.value }))
    const onChangeModel = (e: { target: HTMLInputElement }) => dispatch(setForm({ model: e.target.value }))
    const onChangeTitle = (e: { target: HTMLInputElement }) => dispatch(setForm({ title: e.target.value }))
    const onChangeDescription = (e: { target: HTMLInputElement }) => dispatch(setForm({ description: e.target.value }))
    const onChangeUrl = (e: { target: HTMLInputElement }) => dispatch(setForm({ url: e.target.value }))
    const onChangeShort = (e: { target: HTMLInputElement }) => dispatch(setForm({ short: e.target.value }))


    return (
        <AntdForm layout='vertical'>
            <AntdForm.Item className={css.item} label='offer'>
                <Input type="text" value={offer} onChange={onChangeOffer} />
            </AntdForm.Item >
            <AntdForm.Item className={css.item} label='model' >
                <Input type="text" value={model} onChange={onChangeModel} />
            </AntdForm.Item>
            <AntdForm.Item className={css.item} label='title' >
                <Input type="text" value={title} onChange={onChangeTitle} />
            </AntdForm.Item>
            <AntdForm.Item className={css.item} label='description' >
                <Input type="text" value={description} onChange={onChangeDescription} />
            </AntdForm.Item>
            <AntdForm.Item className={css.item} label='url'>
                <Input type="text" value={url} onChange={onChangeUrl} />
            </AntdForm.Item>
            <AntdForm.Item className={css.item} label='short' help={helpInputShort}>
                <Input status={(helpInputShort) ? 'error' : ''} type="text" value={short} onChange={onChangeShort} />
            </AntdForm.Item>
            <AntdForm.Item className={css.item}>
                <Button
                    onClick={() => updateLink(link)}
                    disabled={disabled}
                    type='primary'
                    children='Обновить'
                />
            </AntdForm.Item>
        </AntdForm >
    )
}

export default Update