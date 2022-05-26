import React, { useEffect, useState } from 'react'
import { Button, Form, Input, Radio } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import css from './LinkDrawerForm.module.css'

import { linkSetForm } from '../../store/actions'

import ApiLink from '../../api'

const LinkDrawerFormUpdate = () => {

    const [disabled, setDisabled] = useState(true)
    const dispatch = useDispatch()

    const { _id, offer, model, title, description, url, short, isShort } = useSelector(state => state.link.drawer.form)
    const links = useSelector(state => state.link.links)
    const link = { _id, offer, model, title, description, url, short }

    const checkCyrilic = /[а-яА-ЯЁё]/.test(short)
    const checkEmpty = offer.length > 0 & model.length > 0 & title.length > 0 & description.length > 0 & url.length > 0 & short.length > 0

    let checkSame

    if (isShort && short !== isShort) {
        checkSame = links.find(link => short === link.short)
    }



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
    const updateLink = () => { dispatch(ApiLink.update(link)) }


    return (
        <Form layout='vertical' >
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
                <Button type='primary' onClick={updateLink} children='Обновить' disabled={disabled} />
            </Form.Item>
        </Form >
    )
}

export default LinkDrawerFormUpdate