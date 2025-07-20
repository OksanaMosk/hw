import { IPost } from '../../models/IPost.ts';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getAll } from '../../services/api_servise.ts';

type PostSliceType = {
  posts: IPost[];
};

const initPostSliceState: PostSliceType = { posts: [] };

const loadPosts = createAsyncThunk('posts', async (_, thunkAPI) => {
  try {
    const posts = await getAll<IPost[]>("/posts");

    return thunkAPI.fulfillWithValue(posts)
  } catch (e) {
    return thunkAPI.rejectWithValue('Error fetch...');
  }
}
);

export const postSlice = createSlice({
  name: 'postSlice',
  initialState: initPostSliceState,
  reducers: {},
  extraReducers: (builder) =>
    builder.addCase(
      loadPosts.fulfilled,
      (state, action: PayloadAction<IPost[]>) => {
        state.posts = action.payload;
      }
    ),
});

export const postAction = { ...postSlice.actions, loadPosts };
