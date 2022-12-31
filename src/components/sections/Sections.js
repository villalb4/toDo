import React from 'react'
import { useSelector } from 'react-redux'
import './Sections.css'
import AddTodo from '../addTodo/addTodo.js'
import All from './allSection/AllSection'
import ActiveSection from './activeSection/ActiveSection'
import CompletedSection from './completedSection/CompletedSection'

function Sections() {

  const stateAll = useSelector(state => state.navegation.all)
  const stateActive = useSelector(state => state.navegation.active)
  const stateCompleted = useSelector(state => state.navegation.completed)

  return (
    <div className='sections_component'> 
      <div className={stateCompleted ? 'sections_divTodo desactive' : 'sections_divTodo'}>
        <AddTodo />
      </div>
      <div className='sections_divSections'>
        {stateAll && <All />}
        {stateActive && <ActiveSection />}
        {stateCompleted && <CompletedSection />}
      </div>
    </div>
  )
}

export default Sections