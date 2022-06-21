import { FC } from 'react'
import { Form, InputNumber, Select } from 'antd'
import useInput from '../hooks/useInput'
import css from '../Form.module.css'
import { CaretDownOutlined, DollarCircleOutlined } from '@ant-design/icons'

const { Option } = Select

const InputPay: FC = () => {
    const { pay, onChangePayCurrency, onChangePayValue } = useInput()
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
                addonBefore={<DollarCircleOutlined />}
                addonAfter={
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
                }
            />
        </Form.Item>
    )
}

export default InputPay