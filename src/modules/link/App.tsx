import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'

import Main from './pages/Main/Main'

const App: FC = () => {
    return (
        <Routes>
            <Route index element={<Main />} />
        </Routes>
    )
}

export default App