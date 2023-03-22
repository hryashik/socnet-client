import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import api from '../../api/api';

export const checkAuthThunk= createAsyncThunk('app/checkAuth', async () => {
  const response = await api.getUser();
  return response;
});

interface IAppState {
  appIsReady: boolean;
}

const initialState: IAppState = {
  appIsReady: false,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    toggleReady(state, action: PayloadAction<boolean>) {
      state.appIsReady = action.payload;
    },
  },
});

export const { toggleReady } = appSlice.actions;
export default appSlice.reducer;
