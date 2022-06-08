import React from 'react'
import MainKey from './components/ProcessList/ProcessItem/TaskItem/MainKey/MainKey'
import ProcessList from './components/ProcessList/ProcessLIst'

const Process: React.FC = () => {
    return (
        <div>
            <ProcessList />
            <MainKey />
        </div>
    )
}

export default Process