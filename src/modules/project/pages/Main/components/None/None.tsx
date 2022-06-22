import { FC } from 'react'
import css from './None.module.css'

const None: FC = () => {
    const picture = "https://cdn2.iconfinder.com/data/icons/travel-481/4000/Relax_on_the_beach-512.png"
    return (
        <img
            className={css.picture}
            src={picture}
            alt="offer"
            loading='lazy'
        />
    )
}

export default None