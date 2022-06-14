import { FC } from 'react'

import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Main from './pages/Main/Main'

const App: FC = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route index element={<Main />} />
            </Routes>
        </>
    )
}

export default App