import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { linkSetForm } from '../../../../store/actions'
import Api from '../../../../api'
import css from '../Form.module.css'

import { Button, Form, Input, Radio } from 'antd'


const Create = () => {
    const [disabled, setDisabled] = useState(true)
    const dispatch = useDispatch()

    const links = useSelector(state => state.link.links)

    const { offer, model, title, description, url, short } = useSelector(state => state.link.drawer.form)
    const link = { offer, model, title, description, url, short }


    const checkCyrilic = /[а-яА-ЯЁё]/.test(short)
    const checkEmpty = offer.length > 0 & model.length > 0 & title.length > 0 & description.length > 0 & url.length > 0 & short.length > 0
    const checkSame = links.find(link => short === link.short)

    const helpInputShort = (checkSame) && 'Уже существует' || (checkCyrilic) && 'Кириллица запрещена'
    const statusInputShort = (checkSame) && 'error' || (checkCyrilic) && 'warning'

    useEffect(() => {
        if (checkEmpty & !checkCyrilic & !checkSame) {
            setDisabled(false)
        } else {
            setDisabled(true)
        }
    }, [offer, model, title, description, url, short])


    const onChangeOffer = (e) => dispatch(linkSetForm({ offer: e.target.value }))
    const onChangeModel = (e) => dispatch(linkSetForm({ model: e.target.value }))
    const onChangeTitle = (e) => dispatch(linkSetForm({ title: e.target.value }))
    const onChangeDescription = (e) => dispatch(linkSetForm({ description: e.target.value }))
    const onChangeUrl = (e) => dispatch(linkSetForm({ url: e.target.value }))
    const onChangeShort = (e) => dispatch(linkSetForm({ short: e.target.value }))
    const createLink = () => dispatch(Api.create(link))


    return (
        <Form layout='vertical'>
            <Form.Item className={css.item} label='offer'>
                <Input placeholder='offer' value={offer} onChange={onChangeOffer} />
            </Form.Item>
            <Form.Item className={css.item} label='model'>
                <Radio.Group onChange={onChangeModel} value={model} buttonStyle="solid" size="small">
                    <Radio.Button value="CPA">CPA</Radio.Button>
                    <Radio.Button value="Revshary">Revshary</Radio.Button>
                    <Radio.Button value="Hybrid">Hybrid</Radio.Button>
                </Radio.Group>
            </Form.Item>
            <Form.Item className={css.item} label='title' >
                <Input placeholder='title' value={title} onChange={onChangeTitle} />
            </Form.Item>
            <Form.Item className={css.item} label='description' >
                <Input placeholder='description' value={description} onChange={onChangeDescription} />
            </Form.Item>
            <Form.Item className={css.item} label='url' >
                <Input placeholder='url' value={url} onChange={onChangeUrl} />
            </Form.Item>
            <Form.Item className={css.item} label='short' help={helpInputShort} >
                <Input status={statusInputShort} placeholder='short' value={short} onChange={onChangeShort} />
            </Form.Item>
            <Form.Item >
                <Button type='primary' onClick={createLink} children='Создать' disabled={disabled} />
            </Form.Item>
        </Form >
    )
}

export default Create
