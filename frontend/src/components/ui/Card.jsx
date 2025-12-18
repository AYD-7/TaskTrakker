import React from 'react'

const Card = ({icon, title, desc}) => {
  return (
    <div>
      <span>{icon}</span>

      <h4>{title}</h4>

      <p>{desc}</p>
    </div>
  )
}

export default Card