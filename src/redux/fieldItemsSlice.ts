import { createSlice } from '@reduxjs/toolkit';

export const appStateSlice = createSlice({
  name: 'appState',
  initialState: { currentQuestion: 0 },
  reducers: {
    updateCurrentQuestion: (state, action) => {
      state.currentQuestion = action.payload;
    },
  },
});

export const { updateCurrentQuestion } = appStateSlice.actions;

export default appStateSlice.reducer;
