import { IUser } from '../../models/IUser.ts';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getAll } from '../../services/api_servise.ts';

type UserSliceType = {
  users: IUser[];
};
const initUserSliceState: UserSliceType = { users: [] };

const loadUsers = createAsyncThunk('loadUsers', async (_, thunkAPI) => {
  try {
    const users = await getAll<IUser[]>('/users');
    return thunkAPI.fulfillWithValue(users);
  } catch (e) {
    return thunkAPI.rejectWithValue('Error fetch...');
  }
});

export const userSlice = createSlice({
  name: 'userSlice',
  initialState: initUserSliceState,
  reducers: {},
  extraReducers: (builder) =>
    builder.addCase(
      loadUsers.fulfilled,
      (state, action: PayloadAction<IUser[]>) => {
        state.users = action.payload;
      }
    ),
});

export const userAction = { ...userSlice.actions, loadUsers };
