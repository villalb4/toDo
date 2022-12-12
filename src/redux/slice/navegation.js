import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  all: true,
  active: false, 
  completed: false
}

const navegationSlice = createSlice({
  name: 'navegation',
  initialState: initialState,
  reducers : {
    setAll: function(state, action) {
      state.all = action.payload
    },
    setActive: function(state, action) {
      state.active = action.payload
    },
    setCompleted: function(state, action) {
      state.completed = action.payload
    },
  }
})

export const {setAll, setActive, setCompleted} = navegationSlice.actions
export default navegationSlice.reducer
