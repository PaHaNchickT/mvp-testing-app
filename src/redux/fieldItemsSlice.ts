import { createSlice } from '@reduxjs/toolkit';

export const appStateSlice = createSlice({
  name: 'appState',
  initialState: { currentQuestion: 0, isTestStarted: false, isTestEnded: false, wrapperOpacity: 'opacity-0' },
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
    setWrapperOpacity: (state, action) => {
      state.wrapperOpacity = action.payload;
    },
  },
});

export const { updateCurrentQuestion, startTest, endTest, clearTest, setWrapperOpacity } = appStateSlice.actions;

export default appStateSlice.reducer;
