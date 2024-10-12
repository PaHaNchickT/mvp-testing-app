import { createSlice } from '@reduxjs/toolkit';

export const appStateSlice = createSlice({
  name: 'appState',
  initialState: { currentQuestion: 0, isTestStarted: false, isTestEnded: false },
  reducers: {
    updateCurrentQuestion: (state, action) => {
      state.currentQuestion = action.payload;
    },
    startTest: (state) => {
      state.isTestStarted = true;
    },
    endTest: (state) => {
      state.isTestStarted = false;
      state.isTestEnded = true;
    },
    clearTest: (state) => {
      state.isTestEnded = false;
    },
  },
});

export const { updateCurrentQuestion, startTest, endTest, clearTest } = appStateSlice.actions;

export default appStateSlice.reducer;
