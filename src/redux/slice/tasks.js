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
    }
  }
})

export const { setTask } = taskSlice.actions
export default taskSlice.reducer

