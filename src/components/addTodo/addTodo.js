import React from 'react'
import './addTodo.css'

function AddTodo() {
  return (
    <div className='addTodo_component'>
      <div className='addTodo_divContainer'>
        <input className='addTodo_input' placeholder='add details'/>
        <button className='addTodo_button'>Add</button>
      </div>
    </div>
  )
}

export default AddTodo