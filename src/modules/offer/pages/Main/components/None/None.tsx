import React from 'react'
import css from './None.module.css'

const None: React.FC = () => {
    const picture = "https://cdn2.iconfinder.com/data/icons/travel-481/4000/Relax_on_the_beach-512.png"
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