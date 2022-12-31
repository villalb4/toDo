import React from 'react'
import AddTodo from '../../addTodo/addTodo'
import { useSelector } from 'react-redux'

import './AllSection.css'

function AllSection() {

  const getItems = useSelector(e => e.tasks.localTask)

  return (
    <div>
      <AddTodo />
      <div className="allSection_divContent">
        {getItems.map((e,i) => {
          return(
            <div key={i} className="allSection_divInput">
              <input type={'checkbox'} className="allSection_checkbox"/>
              <p className='allSection_pTask'>{e.task}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default AllSection