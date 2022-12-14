import React, {useState} from 'react'
import './addTodo.css'

function AddTodo() {

  const [item, setItem] = useState({
    id: crypto.randomUUID(),
    task: "",
    completed: false,
  })

  const handleChange = (e) => {
    const tarea = e.target.value
    setItem({task : tarea})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    localStorage.setItem('tasks', JSON.stringify(item))
    setItem({id: "", task: "", completed: false})
  }

  return (
    <div className='addTodo_component'>
      <div className='addTodo_divContainer'>
        <input className='addTodo_input' placeholder='add details' value={item.task} onChange={handleChange}/>
        <input type="submit" className='addTodo_button' value="add" onClick={handleSubmit}/>
      </div>
    </div>
  )
}

export default AddTodo