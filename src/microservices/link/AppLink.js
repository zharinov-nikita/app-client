import React from 'react'

import LinkDrawer from './components/LinkDrawer/LinkDrawer'
import LinkList from './components/LinkList/LinkList'
import LinkAffix from './components/LinkAffix/LinkAffix'



const AppLink = () => {
    return (
        <>
            <LinkDrawer />
            <LinkList />
            <LinkAffix />
        </>
    )
}

export default AppLink