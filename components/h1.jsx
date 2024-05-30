import React from 'react'

const H1 = ({children}) => {
  return (
    <h1 className="text-2xl mb-8 not-prose">
      {children}
    </h1>
  )
}

export default H1