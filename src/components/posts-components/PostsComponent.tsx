import { useAppDispatch } from '../../redux/hooks/useAppDispatch.tsx';
import { useAppSelector } from '../../redux/hooks/useAppSelector.tsx';
import { useEffect } from 'react';
import { PostComponent } from './PostComponent.tsx';
import { IPost } from '../../models/IPost.ts';
import { postAction } from '../../redux/slices/PostSlice.ts';

export const PostsComponent = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state) => state.postStoreSlice.posts);
  useEffect(() => {
    dispatch(postAction.loadPosts());
  }, []);

  return (
    <div className="flex flex-col">
      {posts.length > 0 && (
        <>
          <h1 className="flex justify-center text-[#eef0d3] text-5xl mb-10">
            Posts
          </h1>
          <ul className="flex flex-wrap justify-center self-center gap-10">
            {posts.map((post: IPost) => (
              <PostComponent key={post.id} post={post} />
            ))}
          </ul>
        </>
      )}
    </div>
  );
};
