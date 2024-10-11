import { createSlice } from '@reduxjs/toolkit';

export const fieldItemsSlice = createSlice({
  name: 'fieldItems',
  initialState: { value: {} },
  reducers: {
    updateField: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { updateField } = fieldItemsSlice.actions;

export default fieldItemsSlice.reducer;
