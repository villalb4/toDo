import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { completedTask } from '../../../redux/slice/tasks'
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
              <div className='allSection_divImage'>
                <img src={trash} alt='' />
              </div>
            </div>
          )
        })}
      </div>
      <div className='allSection_divButton'>
        <button>
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