import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sections: []
}

const navegationSlice = createSlice({
  name: 'navegation',
  initialState: initialState,
  reducers : {
    setSection: function(state, action) {
      state.sections = action.payload
    }
  }
})

export const {setSection} = navegationSlice.actions
export default navegationSlice.reducer
