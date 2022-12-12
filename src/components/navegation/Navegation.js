import React from 'react'
import './Navegation.css'

function Navegation() {
  return (
    <div className='navegation_component'>
      <div className='navegation_divContainer'>
        <div className='navegation_divButton'>
          <button className='navigation_button'>All</button>
          <div className='navegation_divFocus'></div>
        </div>
        <div className='navegation_divButton'>
          <button className='navigation_button'>Active</button>
          <div className='navegation_divFocus'></div>
        </div>
        <div className='navegation_divButton'>
          <button className='navigation_button'>Completed</button>
          <div className='navegation_divFocus'></div>
        </div>
      </div>
    </div>
  )
}

export default Navegation