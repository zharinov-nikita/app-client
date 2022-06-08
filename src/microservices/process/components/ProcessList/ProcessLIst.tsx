import React from 'react'
import { useAppSelector } from '../../../../hooks/redux'
import ProcessItem from './ProcessItem/ProcessItem'

const ProcessList: React.FC = () => {
    const processes = useAppSelector(state => state.process.processes)
    return (
        <>
            {processes.map(process => <ProcessItem key={process._id} process={process} />)}
        </>
    )
}

export default ProcessList