import React from 'react'
import { ProcessType } from '../../../store/process'

type PropsType = {
    process: ProcessType
}


const Item: React.FC<PropsType> = ({ process }) => {
    return (
        <ul>
            <li>{process._id}</li>
            <li>{process.name}</li>
            <li>{process.status}</li>
        </ul>
    )
}

export default Item