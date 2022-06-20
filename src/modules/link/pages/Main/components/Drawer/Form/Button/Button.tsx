import { FC } from 'react'
import { Button as ButtonAntd } from 'antd'
import { useAppSelector } from '../../../../../../../../core/hooks/useAppSelector'
import useValid from '../hooks/useValid'
import useInput from '../hooks/useInput'
import { useHandlerMessage } from './hooks/useHandlerMessage'

const Button: FC = () => {
    const { link, offer, model, title, description, url, short } = useInput()
    const { action } = useAppSelector(state => state.link.form)
    const { disabled } = useValid()

    const { createLink, updateLink } = useHandlerMessage()

    const handlerClick = () => (action === 'create') ? createLink({ offer, model, title, description, url, short }) : updateLink(link)
    const children = (action === 'create') ? 'создать' : 'обновить'



    return (
        <ButtonAntd
            onClick={handlerClick}
            disabled={disabled}
            type='primary'
            children={children}
        />
    )
}

export default Button