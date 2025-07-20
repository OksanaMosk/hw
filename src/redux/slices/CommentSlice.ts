import { IComments } from '../../models/IComments.ts';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getAll } from '../../services/api_servise.ts';

type CommentSliceType = {
  comments: IComments[];
};

const initCommentSliceState: CommentSliceType = { comments: [] };

const loadComments = createAsyncThunk('comments', async (_, thunkAPI) => {
  try {
    const comments = await getAll<IComments[]>("/comments");

    return thunkAPI.fulfillWithValue(comments);
  } catch (e) {
    return thunkAPI.rejectWithValue('Error fetch...');
  }
});

export const commentSlice = createSlice({
  name: 'commentSlice',
  initialState: initCommentSliceState,
  reducers: {},
  extraReducers: (builder) =>
    builder.addCase(
      loadComments.fulfilled,
      (state, action: PayloadAction<IComments[]>) => {
        state.comments = action.payload;
      }
    ),
});

export const commentAction = { ...commentSlice.actions, loadComments };
