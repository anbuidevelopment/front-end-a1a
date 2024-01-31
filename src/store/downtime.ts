import { createSlice } from '@reduxjs/toolkit';

const initialState = { chartData: [] };

const factorySlice: any = createSlice({
  name: 'factories',
  initialState,
  reducers: {
    setFactories: (state, action) => {
      state.chartData = action.payload;
    },
  },
});

// const store = configureStore({
//   reducer: factorySlice.reducer,
// });

export const factoriesAction = factorySlice.actions;

export default factorySlice.reducer;
