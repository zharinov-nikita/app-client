import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import ApiLink from './api/link'

const App = () => {
  const isLoad = useSelector(state => state.link.isLoad)
  const isError = useSelector(state => state.link.isError)
  const links = useSelector(state => state.link.links)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(ApiLink.get())
  }, [])

  if (isLoad) {
    return <div>Загрузка...</div>
  }

  if (isError) {
    return <div>Ошибка</div>
  }

  return (
    <div>
      {links.map(link =>
        <div key={link._id}>{link.offer}</div>
      )}
    </div>
  )
}

export default App