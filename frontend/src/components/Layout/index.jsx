import React from 'react'
import Navbar from '../Navbar'

const index = ({ children }) => {
  return (
    <main>
        <Navbar />
        <div className="py-5 container">{children}</div> 
    </main>
  )
}

export default index