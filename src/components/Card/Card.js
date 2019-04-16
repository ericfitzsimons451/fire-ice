import React from 'react'

const Card = ({houseInfo}) => {
  return (
    <div className='house'>
      <h2>{houseInfo.name}</h2>
      <h3>{houseInfo.founded}</h3>
      <h3>{houseInfo.seats}</h3>
      <h3>{houseInfo.titles}</h3>
      <h3>{houseInfo.coatOfArms}</h3>
      <h3>{houseInfo.ancestralWeapons}</h3>
      <h3>{houseInfo.words}</h3>

    </div>
  )
}

export default Card