import React from 'react'

const Container = ({className, children}) => {
  return (
    <div className={`max-w-320 mx-auto ${className}`}>
        {children}      
    </div>
  )
}

export default Container
