import React from 'react'
import css from './None.module.css'

const None: React.FC = () => {
    const picture = "https://cdn1.iconfinder.com/data/icons/digital-business-iii/206/Digital_Business_Set-03-06-512.png"
    return (
        <img
            className={css.picture}
            src={picture}
            alt="link"
            loading='lazy'
        />
    )
}

export default None