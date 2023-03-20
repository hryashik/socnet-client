import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IInitUserPayload } from './types';

interface IUserState {
  id: number | null;
  email: string | null;
  avatar: string | null;
  init: boolean
}

const initialState: IUserState = {
  id: null,
  email: null,
  avatar: null,
  init: false
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
});

export const { initUser } = userSlice.actions;
export default userSlice.reducer