import { useAppDispatch } from '../../redux/hooks/useAppDispatch.tsx';
import { useAppSelector } from '../../redux/hooks/useAppSelector.tsx';
import { useEffect } from 'react';
import { CommentComponent } from './CommentComponent.tsx';
import { commentAction } from '../../redux/slices/CommentSlice.ts';
import { IComments } from '../../models/IComments.ts';

export const CommentsComponent = () => {
  const dispatch = useAppDispatch();
  const comments = useAppSelector((state) => state.commentStoreSlice.comments);

  useEffect(() => {
    dispatch(commentAction.loadComments());
  }, []);

  return (
    <div className="flex flex-col">
      {comments.length > 0 && (
        <>
          <h1 className="flex justify-center text-[#eef0d3] text-5xl mb-10">
            Comments
          </h1>
          <ul className="flex flex-wrap justify-center self-center gap-10">
            {comments.map((comment: IComments) => (
              <CommentComponent key={comment.id} comment={comment} />
            ))}
          </ul>
        </>
      )}
    </div>
  );
};
