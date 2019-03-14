import React from 'react'
import Bundle from './bundle'

export default load => {
  return props => (
    <Bundle load={load}>
      {LazyComponent => <LazyComponent {...props} />}
    </Bundle>
  )
}
