import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IInitUserPayload } from './types';
import api from '../../api/api';
import { ILoginRequest } from '../../api/contracts';

/* export const loginThunk = createAsyncThunk(
  'user/defineUser',
  async (dto: ILoginRequest) => {
    const response = await api.login(dto);
    return response;
  }
); */

interface IUserState {
  id: number | null;
  email: string | null;
  avatar: string | null;
  init: boolean;
}

const initialState: IUserState = {
  id: null,
  email: null,
  avatar: null,
  init: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    initUser: (state, action: PayloadAction<IInitUserPayload>) => {
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.avatar = action.payload.avatar;
    },
  },
  /* extraReducers: (builder) => {
    builder.addCase(loginThunk.fulfilled, (state, action) => {
      
    })
  } */
});

export const { initUser } = userSlice.actions;
export default userSlice.reducer;
