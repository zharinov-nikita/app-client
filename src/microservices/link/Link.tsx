import React from 'react'
import Affix from './components/Affix/Affix'
import Drawer from './components/Drawer/Drawer'
import List from './components/List/List'

const Link: React.FC = () => {
    return (
        <>
            <List />
            <Drawer />
            <Affix />
        </>
    )
}

export default Link