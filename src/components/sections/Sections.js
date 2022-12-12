import React from 'react'
import { useSelector } from 'react-redux'
import './Sections.css'
import All from './allSection/AllSection'
import ActiveSection from './activeSection/ActiveSection'
import CompletedSection from './completedSection/CompletedSection'

function Sections() {

  const stateAll = useSelector(state => state.navegation.all)
  const stateActive = useSelector(state => state.navegation.active)
  const stateCompleted = useSelector(state => state.navegation.completed)

  return (
    <div>
      {stateAll && <All />}
      {stateActive && <ActiveSection />}
      {stateCompleted && <CompletedSection />}
    </div>
  )
}

export default Sections