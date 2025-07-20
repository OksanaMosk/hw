import { useAppDispatch } from '../../redux/hooks/useAppDispatch.tsx';
import { useAppSelector } from '../../redux/hooks/useAppSelector.tsx';
import { useEffect } from 'react';
import { userAction } from '../../redux/slices/UserSlice.ts';
import { postAction } from '../../redux/slices/PostSlice.ts';
import { commentAction } from '../../redux/slices/CommentSlice.ts';
import { IUser } from '../../models/IUser.ts';
import { IPost } from '../../models/IPost.ts';
import { IComments } from '../../models/IComments.ts';

export const ComplexComponent = () => {
  const dispatch = useAppDispatch();
  const {
    userStoreSlice: { users },
    postStoreSlice: { posts },
    commentStoreSlice: { comments },
  } = useAppSelector((state) => state);

  useEffect(() => {
    if (!users.length) {
      dispatch(userAction.loadUsers());
    }
    if (!posts.length) {
      dispatch(postAction.loadPosts());
    }
    if (!comments.length) {
      dispatch(commentAction.loadComments());
    }
  }, []);

  return (
    <div className="flex flex-col items-center px-6 py-8 bg-[#1a1a1a]  rounded-2xl min-h-screen">
      <h1 className="flex justify-center text-[#eef0d3] text-5xl mb-10">Complex</h1>
      <p className="text-2xl text-[#eef0d3] italic mb-10">(Users + Posts + Comments)</p>

      {users.map((user: IUser) => {
        const userPosts = posts.filter((post) => post.userId === user.id);

        return (
          <div
            key={user.id}
            className="w-full max-w-4xl mb-10 bg-[#eef0d3] rounded-xl p-6 "
          >
            <div className="flex justify-between items-center border-b border-[#bf550d] pb-2 mb-3">
              <h2 className="text-[#bf550d] text-xl font-bold">{user.name}</h2>
              <p className="text-sm text-[#bf550d]">User ID: {user.id}</p>
            </div>

            <div className="text-[#404214] mb-4 text-sm">
              <p><strong>Username:</strong> {user.username}</p>
              <p><strong>Email:</strong> {user.email}</p>

              <div className="mt-2">
                <p><strong>Address:</strong> {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</p>
                <p><strong>Geo:</strong> {user.address.geo.lat}, {user.address.geo.lng}</p>
                <p><strong>Phone:</strong> {user.phone}</p>
                <p><strong>Website:</strong> {user.website}</p>
              </div>

              <div className="mt-2">
                <p><strong>Company:</strong> {user.company.name}</p>
                <p><strong>Catchphrase:</strong> {user.company.catchPhrase}</p>
                <p><strong>BS:</strong> {user.company.bs}</p>
              </div>
            </div>


            {userPosts.map((post: IPost) => {
              const postComments = comments.filter((comment) => comment.postId === post.id);

              return (
                <div
                  key={post.id}
                  className="bg-white border border-[#badd86] rounded-lg p-4 mb-4 shadow hover:bg-[#badd86] hover:shadow-md transition"
                >
                  <div className="flex justify-between text-[#bf550d] text-sm font-medium mb-1">
                    <p>Post ID: {post.id}</p>
                    <p>User ID: {post.userId}</p>
                  </div>
                  <h3 className="text-[#404214] text-lg font-semibold italic mb-2">
                    "{post.title}"
                  </h3>
                  <p className="text-[#404214] text-sm">{post.body}</p>


                  {postComments.length > 0 && (
                    <div className="mt-3 border-t border-[#badd86] pt-3">
                      <h4 className="text-[#404214] text-md font-semibold mb-2">Comments:</h4>
                      <ul className="space-y-3">
                        {postComments.map((comment: IComments) => (
                          <li
                            key={comment.id}
                            className="bg-[#eef0d3] border border-[#bf550d] rounded p-3 text-sm text-[#404214]"
                          >
                            <h5 className="font-semibold italic mb-1">"{comment.name}"</h5>
                            <div className="flex justify-between text-xs font-medium text-[#bf550d]">
                              <p>Comment ID: {comment.id}</p>
                              <p>Post ID: {comment.postId}</p>
                            </div>
                            <p className="mt-1">{comment.body}</p>
                            <p className="text-xs text-[#bf550d] font-bold mt-1">Email: {comment.email}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  )
}
