import React from 'react'
import { useDispatch } from 'react-redux'
import { linkCreateForm } from '../../store/actions'
import css from './Affix.module.css'

import { AppstoreAddOutlined } from '@ant-design/icons'
import { Button } from 'antd'




const Affix = () => {
    const dispatch = useDispatch()
    return (
        <div className={css.affix}>
            <Button
                className={css.button}
                type="primary"
                shape='circle'
                onClick={() => dispatch(linkCreateForm())}
                icon={<AppstoreAddOutlined />}
                size='large'
            />
        </div>
    )
}

export default Affix