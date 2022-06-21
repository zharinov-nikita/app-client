import { FC } from 'react'
import { Form as AntdForm } from 'antd'
import InputShort from './Inputs/InputShort'
import InputName from './Inputs/InputName'
import InputType from './Inputs/InputType'
import InputPay from './Inputs/inputPay'
import InputUrl from './Inputs/inputUrl'
import RadioModel from './Radios/RadioModel'
import Button from './Buttons/Button'


const Form: FC = () => {
    return (
        <AntdForm layout='vertical'>
            <InputName />
            <RadioModel />
            <InputType />
            <InputPay />
            <InputUrl />
            <InputShort />
            <Button />
        </AntdForm >
    )
}

export default Form