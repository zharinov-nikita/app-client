import React from 'react'
import css from './Affix.module.css'

import { AppstoreAddOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import { useAppDispatch } from '../../../../hooks/redux'
import { linkSlice } from '../../store'




const Affix: React.FC = () => {
    const { createForm } = linkSlice.actions
    const dispatch = useAppDispatch()
    return (
        <div className={css.affix}>
            <Button
                className={css.button}
                type="primary"
                shape='circle'
                onClick={() => dispatch(createForm())}
                icon={<AppstoreAddOutlined />}
                size='large'
            />
        </div>
    )
}

export default Affix