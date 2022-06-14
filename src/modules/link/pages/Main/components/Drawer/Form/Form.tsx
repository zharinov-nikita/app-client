import React, { useEffect } from 'react'
import useInput from './hooks/useInput'
import useValid from './hooks/useValid'

import { useAppDispatch } from "../../../../../../../core/hooks/useAppDispatch"
import { useAppSelector } from "../../../../../../../core/hooks/useAppSelector"

import css from './Form.module.css'
import { Button, Input, Form as AntdForm } from 'antd'
import { useCreateLinkMutation, useUpdateLinkMutation } from '../../../../../services'
import { appSlice } from '../../../../../../../core/store'
import { linkSlice } from '../../../../../store'



const Form: React.FC = () => {
    const [createLink, { isSuccess: isSuccessCreate, isError: isErrorCreate }] = useCreateLinkMutation()
    const [updateLink, { isSuccess: isSuccessUpdate, isError: isErrorUpdate }] = useUpdateLinkMutation()
    const { showMessage } = appSlice.actions
    const { hideDrawer } = linkSlice.actions

    const dispatch = useAppDispatch()
    const { action } = useAppSelector(state => state.link.form)

    const { link } = useInput()
    const { onChange } = useInput()
    const { offer, model, title, description, url, short } = useInput()

    const { disabled, helpInputShort } = useValid()


    const inputs = [
        { name: 'offer', value: offer },
        { name: 'model', value: model },
        { name: 'title', value: title },
        { name: 'description', value: description },
        { name: 'url', value: url }
    ]

    const onClickBtn = () => (action === 'create') ? createLink(link) : updateLink(link)
    const childrenBtn = (action === 'create') ? 'создать' : 'обновить'

    useEffect(() => {
        if (isSuccessCreate) {
            dispatch(showMessage({ id: Date.now(), level: 'success', content: `Ссылка ${link.title} успешно создана` }))
            dispatch(hideDrawer())
        }
        if (isErrorCreate) {
            dispatch(showMessage({ id: Date.now(), level: 'error', content: `Что-то пошло не так` }))
        }
    }, [isSuccessCreate, isErrorCreate])

    useEffect(() => {
        if (isSuccessUpdate) {
            dispatch(showMessage({ id: Date.now(), level: 'success', content: `Ссылка ${link.title} успешно обновлена` }))
            dispatch(hideDrawer())
        }
        if (isErrorUpdate) {
            dispatch(showMessage({ id: Date.now(), level: 'error', content: `Что-то пошло не так` }))
        }
    }, [isSuccessUpdate, isErrorUpdate])

    return (
        <AntdForm layout='vertical'>
            {inputs.map(input =>
                <AntdForm.Item className={css.item} label={input.name} key={input.name} >
                    <Input type="text" placeholder={input.name} name={input.name} value={input.value} onChange={onChange} />
                </AntdForm.Item>
            )}

            <AntdForm.Item className={css.item} label={'short'} help={helpInputShort} key={'short'} >
                <Input type="text"
                    placeholder={'short'}
                    status={(helpInputShort) ? 'error' : ''}
                    name={'short'}
                    value={short}
                    onChange={onChange} />
            </AntdForm.Item>

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

export default Form