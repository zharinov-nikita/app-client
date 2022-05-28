import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import ApiBusiness from './api'

const AppBusiness = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(ApiBusiness.get())
    }, [])

    return (
        <div>
            Business
        </div>
    )
}

export default AppBusiness