import React from 'react'

const Card = ({ children }) => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md p-4">
      {children}
    </div>
  )
}

export default Card
