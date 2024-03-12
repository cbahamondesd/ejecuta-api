import React from 'react'

const Pokemones = ({pokemones = [] }) => {
  return (
    <div>
        <ul>
        {pokemones.map((item) => (
            <li key={item.name}> {item.name} </li>
        ) )  }
        </ul>
    </div>
  )
}

export default Pokemones;
