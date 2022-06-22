import { FC } from 'react'
import { Form, InputNumber, Select } from 'antd'
import useInput from '../hooks/useInput'
import css from '../Form.module.css'
import { CaretDownOutlined, DollarCircleOutlined, PercentageOutlined } from '@ant-design/icons'
import { useAppSelector } from '../../../../../../../../core/hooks/useAppSelector'

const { Option } = Select

const SelectMain = () => {
    const { model } = useAppSelector(state => state.offer.form)
    return (
        <>
            {(model === 'cpa') && <SelectCpa />}
            {(model === 'revshary') && <SelectRevshary />}
        </>
    )
}

const SelectCpa = () => {
    const { pay, onChangePayCurrency } = useInput()
    return (
        <Select
            defaultValue="RUB"
            suffixIcon={<CaretDownOutlined />}
            value={pay.currency}
            onChange={onChangePayCurrency}
        >
            <Option value="RUB">RUB</Option>
            <Option value="USD">USD</Option>
            <Option value="EUR">EUR</Option>
        </Select>
    )
}


const SelectRevshary = () => {
    const { pay, onChangePayCurrency } = useInput()
    return (
        <Select
            defaultValue="%"
            suffixIcon={<CaretDownOutlined />}
            value={pay.currency}
            onChange={onChangePayCurrency}
        >
            <Option value="%">
                <PercentageOutlined />
            </Option>
        </Select >
    )
}

const InputPay: FC = () => {
    const { model } = useAppSelector(state => state.offer.form)
    const { pay, onChangePayValue } = useInput()
    return (
        <Form.Item
            className={css.item}
            label={'Оплата'}
        >
            <InputNumber
                style={{ width: '100%' }}
                min={0}
                type="number"
                placeholder={'0'}
                name={'pay'}
                value={pay.value}
                onChange={onChangePayValue}
                addonAfter={model}
                addonBefore={model && <SelectMain />}
            />
        </Form.Item>
    )
}

export default InputPay