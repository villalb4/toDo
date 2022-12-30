import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import './Navegation.css'
import { setAll, setActive, setCompleted } from '../../redux/slice/navegation'

function Navegation() {

  const dispatch = useDispatch()

  const [indicator, setIndicator] = useState(50)

  const handleAllButton = () => {
    dispatch(setAll(true))
    dispatch(setActive(false))
    dispatch(setCompleted(false))
    setIndicator(50)
  }

  const handleActiveButton = () => {
    dispatch(setActive(true))
    dispatch(setAll(false))
    dispatch(setCompleted(false))
    setIndicator(260)
  }

  const handleCompletedButton = () => {
    dispatch(setCompleted(true))
    dispatch(setActive(false))
    dispatch(setAll(false))
    setIndicator(469)
  }

  return (
    <div className='navegation_component'>
      <div className='navegation_divContainer'>

        <div className='navegation_divFocuss' style={{left: `${indicator}px`}}></div>

        <div className='navegation_divButton' onClick={handleAllButton}>
          <button className='navigation_button'>All</button>
          <div className='navegation_divFocus'></div>
        </div>

        <div className='navegation_divButton' onClick={handleActiveButton}>
          <button className='navigation_button'>Active</button>
          <div className='navegation_divFocus'></div>
        </div>

        <div className='navegation_divButton' onClick={handleCompletedButton}>
          <button className='navigation_button'>Completed</button>
          <div className='navegation_divFocus'></div>
        </div>
      </div>
    </div>
  )
}

export default Navegation