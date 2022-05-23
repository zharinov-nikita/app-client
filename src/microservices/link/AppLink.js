import React from 'react'

import LinkHeader from './components/LinkHeader/LinkHeader'
import LinkDrawer from './components/LinkDrawer/LinkDrawer'
import LinkList from './components/LinkList/LinkList'

const AppLink = () => {
    return (
        <>
            <LinkHeader />
            <LinkDrawer />
            <LinkList />
        </>
    )
}

export default AppLink