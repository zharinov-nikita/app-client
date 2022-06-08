import React from 'react'
import { useAppSelector } from '../../../../hooks/redux'
import Item from './Item/Item';

const List: React.FC = () => {
    const processes = useAppSelector(state => state.process.processes)
    return (
        <>
            {processes.map(process => <Item key={process._id} process={process} />)}
        </>
    )
}

export default List