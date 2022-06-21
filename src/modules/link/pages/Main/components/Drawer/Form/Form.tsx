import { FC } from 'react'
import { Form as AntdForm } from 'antd'
import InputShort from './Inputs/InputShort'
import InputOffer from './Inputs/InputOffer'
import InputTitle from './Inputs/InputTitle'
import InputDescription from './Inputs/inputDescription'
import InputUrl from './Inputs/inputUrl'
import RadioModel from './Radios/RadioModel'
import Button from './Button/Button'


const Form: FC = () => {
    return (
        <AntdForm layout='vertical'>
            <InputOffer />
            <RadioModel />
            <InputTitle />
            <InputDescription />
            <InputUrl />
            <InputShort />
            <Button />
        </AntdForm >
    )
}

export default Form