import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import ApiLink from '../../../../api/link'
import LinkItem from '../LinkItem/LinkItem'
import LinkNone from '../LinkNone/LinkNone'
import LinkSpin from '../LinkSpin/LinkSpin'

const LinkList = () => {
    const isLoad = useSelector(state => state.link.isLoad)
    const isError = useSelector(state => state.link.isError)
    const links = useSelector(state => state.link.links)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(ApiLink.get())
    }, [])

    if (isLoad) {
        return <LinkSpin />
    }

    if (isError) {
        return <LinkNone />
    }

    return (
        <div>
            {links.map(link =>
                <LinkItem key={link._id} document={link} />
            )}
        </div>
    )
}

export default LinkList