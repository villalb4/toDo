import React from 'react'
import './AllSection.css'

function AllSection() {

  const getItems = JSON.parse(localStorage.getItem('todoList'))

  return (
    <div>
      <div className="allSection_divContent">
        {getItems !== null ? getItems.map((e,i) => {
          return(
            <div key={i} className="allSection_divInput">
              <input type={'checkbox'} className="allSection_checkbox"/>
              <p className='allSection_pTask'>{e.task}</p>
            </div>
          )
        }) : null}
      </div>
    </div>
  )
}

export default AllSection