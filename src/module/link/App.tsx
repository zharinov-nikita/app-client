import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'

import List from './components/List/List'

const App: FC = () => {
    return (
        <Routes>
            <Route index element={<List />} />
        </Routes>
    )
}

export default App