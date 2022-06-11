import React from 'react'
import ExtraKey from './components/ProcessList/ProcessItem/TaskItem/ExtraKey/ExtraKey'
import MainKey from './components/ProcessList/ProcessItem/TaskItem/MainKey/MainKey'
import ProcessList from './components/ProcessList/ProcessLIst'

const Process: React.FC = () => {
    return (
        <div>
            <ProcessList />
            <MainKey />
            <ExtraKey />
        </div>
    )
}

export default Process