import {useEffect, useState} from "react";
import {loadAll} from "../services/api_service.ts";
import {IBase} from "../models/IBase.ts";
import {IPost} from "../models/IPost.ts";
import {PostComponent} from "./PostComponent.tsx";



export const PostsComponent = () => {
    const[posts, setPosts]=useState<IPost[]>([])

    useEffect(() => {
        loadAll<IBase & {posts:IPost[]}>('/posts')
            .then (({posts})=> setPosts(posts)
            )
    }, []);

    return (
        <ul className="flex flex-wrap justify-center self-center gap-10 mb-10 mt-10">
            {
                posts.map((post, id:number)=> <PostComponent key={id} post={post}/>)
            }
        </ul>
    );
};

