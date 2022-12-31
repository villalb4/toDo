import React from 'react'
import AddTodo from '../../addTodo/addTodo.js'
import { useSelector } from 'react-redux'
import trash from '../../../assets/trash.png'
import './CompletedSection.css'

function CompletedSection() {

  const getItems = useSelector(e => e.tasks.localTask)

  const itemsFiltered = getItems.filter(e => e.completed === false)

  return (
    <div>
      <div className="completedSection_divContent">
        {itemsFiltered.map((e,i) => {
          return(
            <div key={i} className="allSection_divInput completed">
              <div className='allSection_divItems'>
                <input type={'checkbox'} className="allSection_checkbox"/>
                <p className='allSection_pTask'>{e.task}</p>
              </div>
              <div className='allSection_divImage'>
                <img src={trash}></img>
              </div>
            </div>
          )
        })}
      </div>
      <div className='allSection_divButton'>
        <button>
          <div className='completedSection_divImgButton'>
            <img src={trash} />
          </div>
          delete all
        </button>
      </div>
    </div>
  )
}

export default CompletedSection