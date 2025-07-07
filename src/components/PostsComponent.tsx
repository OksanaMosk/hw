import {useEffect, useState} from 'react';
import {loadPost} from "../data/api_service.ts";
import {IPost} from "../models/PostModel.ts";
import PostComponent from "./PostComponent.tsx";

export const PostsComponent = () => {
    const [posts, setPosts]=useState<IPost[]>([])

    useEffect(() => {
        loadPost().then(value => setPosts(value))
    }, []);
    return (
        <ul className="flex flex-wrap justify-center self-center  m-10 gap-10 ">
            {posts.map((post)=> <PostComponent key={post.id} post={post} />)
            }
        </ul>
    );
};

