import React, {useState} from 'react'
import './Navegation.css'

function Navegation() {

  const [allButton, setAllButton] = useState(false)
  const [activeButton, setActiveButton] = useState(false)
  const [completedButton, setCompletedButton] = useState(false)

  const handleAllButton = () => {
    setAllButton(true)
    setActiveButton(false)
    setCompletedButton(false)
  }

  const handleActiveButton = () => {
    setActiveButton(true)
    setAllButton(false)
    setCompletedButton(false)
  }

  const handleCompletedButton = () => {
    setCompletedButton(true)
    setActiveButton(false)
    setAllButton(false)
  }

  return (
    <div className='navegation_component'>
      <div className='navegation_divContainer'>

        <div 
          className={ allButton ? 'navegation_divButton all active' : 'navegation_divButton all' }
          onClick={handleAllButton}
        >
          <button className='navigation_button'>All</button>
          <div className='navegation_divFocus'></div>
        </div>

        <div 
          className={ activeButton ? 'navegation_divButton act active' : 'navegation_divButton act' }
          onClick={handleActiveButton}
        >
          <button className='navigation_button'>Active</button>
          <div className='navegation_divFocus'></div>
        </div>

        <div 
          className={ completedButton ? 'navegation_divButton completed active' : 'navegation_divButton completed' }
          onClick={handleCompletedButton}
        >
          <button className='navigation_button'>Completed</button>
          <div className='navegation_divFocus'></div>
        </div>
      </div>
    </div>
  )
}

export default Navegation