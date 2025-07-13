import {useEffect, useState} from "react";
import {PostDummyjsonComponents} from "./PostDummyjsonComponent.tsx";
import {loadPostsDummy} from "../services/api_service_dummy.ts";
import {IPostDummyModel} from "../models/PostDummyModel.ts";


export const PostsDummyjsonComponent = () => {
    const[posts, setPosts]=useState<IPostDummyModel[]>([])

    useEffect(() => {
        async function fetchPostsDummy () {
            const allPostsDummy:IPostDummyModel[] = await loadPostsDummy()
            setPosts(allPostsDummy)
        }
        fetchPostsDummy().catch(console.error)

    }, []);
    return (
        <ul className="flex flex-wrap justify-center self-center gap-10">
            {
                posts.map((post, id:number)=> <PostDummyjsonComponents key={id} post={post}/>)
            }
        </ul>
    );
};
