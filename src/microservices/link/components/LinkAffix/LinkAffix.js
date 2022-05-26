import React from 'react'
import css from './LinkAffix.module.css'

import { useDispatch } from 'react-redux'
import { AppstoreAddOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import { linkCreateForm } from '../../store/actions'



const LinkAffix = () => {
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

export default LinkAffix