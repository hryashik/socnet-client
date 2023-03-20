import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IAppState {
  isReady: boolean;
}

const initialState: IAppState = {
  isReady: false,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    toggleReady(state, action: PayloadAction<boolean>) {
      state.isReady = action.payload;
    },
  },
});

export const { toggleReady } = appSlice.actions;
export default appSlice.reducer;
