import { FC } from 'react'
import { Radio, Form } from 'antd'
import css from '../Form.module.css'
import useInput from '../hooks/useInput'

const RadioModel: FC = () => {
    const options = [
        { label: 'cpa', value: 'cpa' },
        { label: 'revshary', value: 'revshary' },
        { label: 'hybrid', value: 'hybrid', disabled: true },
    ]

    const { onRadioChange } = useInput()
    const { model } = useInput()

    return (
        <Form.Item className={css.item} label={'model'}>
            <Radio.Group
                name='model'
                options={options}
                value={model}
                onChange={onRadioChange}
                optionType="button"
                buttonStyle="solid"
            />
        </Form.Item>
    )
}

export default RadioModel