import React from 'react'
import { useSelector } from 'react-redux'

function ActiveSection() {

  const getItems = useSelector(e => e.tasks.localTask)
  const itemsFiltered = getItems.filter(e => e.completed === false)

  return (
    <div>
      <div className="allSection_divContent">
        {itemsFiltered.map((e,i) => {
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

export default ActiveSection
