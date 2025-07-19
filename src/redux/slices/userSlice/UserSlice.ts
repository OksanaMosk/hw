import { IUser } from '../../../models/IUser.ts';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';


type userSliceType = {
  users: IUser[],
  user:IUser|null,
}

const initialState: userSliceType = { users: [], user:null };

const loadUsers = createAsyncThunk(
  'userSlice/loadUsers',
  async (_, thunkAPI) => {
  try  {
      const users = await fetch(
        'https://jsonplaceholder.typicode.com/users'
      ).then((value) => value.json());
      return thunkAPI.fulfillWithValue(users);
    }
    catch (error) {
    return thunkAPI.rejectWithValue(error);
    }
  }
);

const loadUser = createAsyncThunk(
  'userSlice/loadUser',
  async (id, thunkAPI) => {
    try  {
      const user = await fetch(
        'https://jsonplaceholder.typicode.com/users' + id
      ).then((value) => value.json());
      return thunkAPI.fulfillWithValue(user);
    }
    catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const userSlice = createSlice({
  name: 'userSlice',
  initialState: initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(loadUsers.fulfilled, (state, action: PayloadAction<IUser[]>) => {
      state.users = action.payload
    })
      .addCase(loadUsers.rejected, (state, action) => {
              console.log(state)
              console.log(action)
            })
      .addCase(loadUser.fulfilled, (state, action: PayloadAction<IUser>) => {
        state.user = action.payload
      })
      .addCase(loadUser.rejected, (state, action) => {
        console.log(state)
        console.log(action)
      })
});

export const userSliceAction = {
  ...userSlice.actions,loadUsers,loadUser
};
