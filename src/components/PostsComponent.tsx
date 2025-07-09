import  { FC, useEffect, useState } from 'react';
import {IPostModel} from "../models/PostModel.ts";
import {loadPost} from "../data/api_servise.ts";
import {PostComponent} from './PostComponent.tsx'

export const PostsComponent:FC= () => {
    const [posts,setPosts]=useState<IPostModel[]>([])
    useEffect(() => {
        async function fetchPosts (){
        const allPosts=await loadPost()
            setPosts(allPosts)
        }

        fetchPosts().catch(console.error);
    }, []);


    return (
        <ul className="flex flex-wrap justify-center self-center  m-10 gap-10">
            {posts.map((post) => <PostComponent key={post.id} post={post}/>)
            }
        </ul>
    );
};


