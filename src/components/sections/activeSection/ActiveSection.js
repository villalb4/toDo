import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { completedTask } from '../../../redux/slice/tasks'

function ActiveSection() {

  const dispatch = useDispatch()

  const getItems = useSelector(e => e.tasks.localTask)
  const itemsFiltered = getItems.filter(e => e.completed === false)

  const handleChange = (e) => {
    const taskId = e.target.id
    dispatch(completedTask(taskId))
  }

  return (
    <div>
      <div className="allSection_divContent">
        {itemsFiltered.map((e,i) => {
          return(
            <div key={i} className="allSection_divInput">
              <input 
                type={'checkbox'} 
                className="allSection_checkbox" 
                id={e.id}
                onChange={handleChange}
                defaultChecked={e.completed === true}
              />
              <p className={e.completed === true ? 'allSection_pTask completed': 'allSection_pTask'}>{e.task}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ActiveSection
