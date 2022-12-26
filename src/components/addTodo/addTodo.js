import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { setTask } from '../../redux/slice/tasks'
import './addTodo.css'

function AddTodo() {

  const dispatch = useDispatch()

  const [item, setItem] = useState({
    id: "",
    task: "",
    completed: false,
  })

  const handleChange = (e) => {
    const tarea = e.target.value
    setItem({
      id: crypto.randomUUID(),
      task : tarea,
      completed: false
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(item.task) {
      dispatch(setTask(item))
      setItem({id: "", task: "", completed: false})
    }
  }

  return (
    <div className='addTodo_component'>
      <form className='addTodo_divContainer'>
        <input className='addTodo_input' placeholder='add details' value={item.task} onChange={handleChange} autoFocus/>
        <input type="submit" className='addTodo_button' value="Add" onClick={handleSubmit}/>
      </form>
    </div>
  )
}

export default AddTodo