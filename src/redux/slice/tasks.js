import { createSlice } from "@reduxjs/toolkit"

const localStorageTask = localStorage.getItem('todoList') !== null
  ? localStorage.getItem('todoList') : []

const initialState = {
  localTareas: localStorageTask,
  tareas : []
}

const taskSlice = createSlice({
  name: "tasks",
  initialState: initialState,
  reducers : {
    setTask: function(state, action) { 
      state.tareas = [...state.tareas, action.payload]
      localStorage.setItem('todoList', JSON.stringify(state.tareas.map(e => e)))
    }
  }
})

export const {setLocalStorage, setTask} = taskSlice.actions
export default taskSlice.reducer

