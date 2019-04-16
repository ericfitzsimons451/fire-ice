import React from 'react'
import Card from '../Card/Card'

const Display = (props) => {
  const displayCards = props.houses.map((house) => {
    return (
      <Card houseInfo={house} />
    )
  })

  return (
    <div className='card-display'>
      {displayCards}
    </div>
  )
}

export default Display