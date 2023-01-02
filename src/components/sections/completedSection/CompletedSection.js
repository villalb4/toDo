import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { completedTask, deleteSingleTask, deleteAllCompleteTask } from '../../../redux/slice/tasks'
import trash from '../../../assets/trash.png'
import trash_white from '../../../assets/trash_white.png'
import './CompletedSection.css'

function CompletedSection() {

  const dispatch = useDispatch()

  const getItems = useSelector(e => e.tasks.localTask)

  const itemsFiltered = getItems.filter(e => e.completed === true)

  const handleChange = (e) => {
    const taskId = e.target.id
    dispatch(completedTask(taskId))
  }

  const handleSingleDelete = (e) => {
    const taskId = e
    dispatch(deleteSingleTask(taskId))
  }

  const handleAllDelete = () => {
    dispatch(deleteAllCompleteTask())
  }

  return (
    <div>
      <div className="completedSection_divContent">
        {itemsFiltered.map((e,i) => {
          return(
            <div key={i} className="allSection_divInput completed">
              <div className='allSection_divItems'>
                <input 
                  type={'checkbox'} 
                  className="allSection_checkbox" 
                  id={e.id}
                  onChange={handleChange}
                  defaultChecked={e.completed === true}
                />
                 <p className={e.completed === true ? 'allSection_pTask completed': 'allSection_pTask'}>{e.task}</p>
              </div>
              <button
                className='allSection_buttonImage'
                onClick={() => handleSingleDelete(e.id)}
              >
                <img src={trash} alt='' />
              </button>
            </div>
          )
        })}
      </div>
      <div className='allSection_divButton'>
        <button onClick={handleAllDelete}>
          <div className='completedSection_divImgButton'>
            <img src={trash_white} alt=''/>
          </div>
          delete all
        </button>
      </div>
    </div>
  )
}

export default CompletedSection