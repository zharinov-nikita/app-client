import React from 'react'
import css from './LinkNone.module.css'

const LinkNone = () => {
    const picture = "https://cdn2.iconfinder.com/data/icons/scenes-16/1900/Time_Managment_Accounting_Success_Man_-512.png"
    return (
        <div>
            <img
                className={css.picture}
                src={picture}
                alt="link"
                loading='lazy'
            />
        </div>
    )
}

export default LinkNone