import { createSlice } from "@reduxjs/toolkit"

const localStorageTask = localStorage.getItem('todoList') !== null
  ? JSON.parse(localStorage.getItem('todoList')) 
  : []

const initialState = {
  localTask: localStorageTask,
}

const taskSlice = createSlice({
  name: "tasks",
  initialState: initialState,
  reducers : {
    setTask: function(state, action) {
      state.localTask.push(action.payload)
      const toDo = JSON.parse(localStorage.getItem('todoList'))
      if(toDo) {
        toDo.push({...action.payload})
        localStorage.setItem('todoList', JSON.stringify(toDo))
      } 
      else {
        localStorage.setItem('todoList', JSON.stringify([{...action.payload}]))
      }
    },
    completedTask: function(state, action) {
      const taskId = action.payload
      const newList = state.localTask.map(e => {
        if(e.id === taskId) return {...e , completed: !e.completed}
        return e
      })
      state.localTask = newList
      localStorage.setItem('todoList', JSON.stringify(newList))
    },
    deleteSingleTask: function(state, action) {
      const taskId = action.payload
      const newList = state.localTask.filter(e => e.id !== taskId)
      state.localTask = newList
      localStorage.setItem('todoList', JSON.stringify(newList))
    },
    deleteAllCompleteTask: function(state, action) {
      const newList = state.localTask.filter(e => e.completed !== true)
      state.localTask = newList
      localStorage.setItem('todoList', JSON.stringify(newList))
    }
  }
})

export const { setTask, completedTask, deleteSingleTask, deleteAllCompleteTask } = taskSlice.actions
export default taskSlice.reducer

