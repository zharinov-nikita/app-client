import React, { useEffect, useState } from 'react'
import { Button, Form, Input } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import css from './LinkDrawerForm.module.css'

import ApiLink from '../../api'

const LinkDrawerFormCreate = () => {
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


    return (
        <Form layout='vertical'>
            <Form.Item className={css.item} label='offer'>
                <Input placeholder='offer' value={offer} onChange={(e) => dispatch({ type: 'LINK_SET_FORM', offer: e.target.value })} />
            </Form.Item>
            <Form.Item className={css.item} label='model'>
                <Input placeholder='model' value={model} onChange={(e) => dispatch({ type: 'LINK_SET_FORM', model: e.target.value })} />
            </Form.Item>
            <Form.Item className={css.item} label='title' >
                <Input placeholder='title' value={title} onChange={(e) => dispatch({ type: 'LINK_SET_FORM', title: e.target.value })} />
            </Form.Item>
            <Form.Item className={css.item} label='description' >
                <Input placeholder='description' value={description} onChange={(e) => dispatch({ type: 'LINK_SET_FORM', description: e.target.value })} />
            </Form.Item>
            <Form.Item className={css.item} label='url' >
                <Input placeholder='url' value={url} onChange={(e) => dispatch({ type: 'LINK_SET_FORM', url: e.target.value })} />
            </Form.Item>
            <Form.Item className={css.item} label='short' help={helpInputShort} >
                <Input status={statusInputShort} placeholder='short' value={short} onChange={(e) => dispatch({ type: 'LINK_SET_FORM', short: e.target.value })} />
            </Form.Item>
            <Form.Item >
                <Button type='primary' onClick={() => dispatch(ApiLink.create(link))} children='Создать' disabled={disabled} />
            </Form.Item>
        </Form >
    )
}

export default LinkDrawerFormCreate