import { createSlice } from '@reduxjs/toolkit';

import { localStorageUtil } from '@/utils/localStorage';

export const appStateSlice = createSlice({
  name: 'appState',
  initialState: {
    currentQuestion: localStorageUtil().getData('currentQuestion')
      ? +localStorageUtil().getData('currentQuestion')!
      : 0,
    isTestStarted:
      localStorageUtil().getData('isTestStarted') !== null
        ? JSON.parse(localStorageUtil().getData('isTestStarted')!)
        : false,
    isTestEnded: false,
    wrapperOpacity: 'opacity-0',
    isSuccess: true,
  },
  reducers: {
    updateCurrentQuestion: (state, action) => {
      state.currentQuestion = action.payload;
    },
    startTest: (state) => {
      state.isTestStarted = true;
    },
    endTestSuccess: (state) => {
      state.isTestStarted = false;
      state.isTestEnded = true;
      state.isSuccess = true;
    },
    endTestFailure: (state) => {
      state.isTestStarted = false;
      state.isTestEnded = true;
      state.isSuccess = false;
    },
    clearTest: (state) => {
      state.isTestEnded = false;
      state.isSuccess = true;
    },
    setWrapperOpacity: (state, action) => {
      state.wrapperOpacity = action.payload;
    },
  },
});

export const { updateCurrentQuestion, startTest, endTestSuccess, endTestFailure, clearTest, setWrapperOpacity } =
  appStateSlice.actions;

export default appStateSlice.reducer;
