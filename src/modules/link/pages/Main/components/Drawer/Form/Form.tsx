import React from 'react'
import useInput from './hooks/useInput'
import css from './Form.module.css'
import { Input, Form as AntdForm } from 'antd'
import useValid from './hooks/useValid'
import Button from './Button/Button'
import { useHandlerMessage } from './Button/hooks/useHandlerMessage'





const Form: React.FC = () => {
    const { onChange } = useInput()
    const { offer, model, title, description, url, short } = useInput()
    const { helpInputShort } = useValid()


    const inputs = [
        { name: 'offer', value: offer },
        { name: 'model', value: model },
        { name: 'title', value: title },
        { name: 'description', value: description },
        { name: 'url', value: url }
    ]



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
                <Button />
            </AntdForm.Item>
        </AntdForm >
    )
}

export default Form