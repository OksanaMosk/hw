import {FC, useEffect, useState} from 'react';
import {loadPosts} from '../services/api_service_jsonplaceholder.ts';
import {IPostJsonModel} from "../models/PostJsonModel.ts";
import {PostJsonplaceholderComponent} from './PostJsonplaceholderComponent.tsx'

export const PostsJsonplaceholderComponent: FC = () => {
    const [posts, setPosts] = useState<IPostJsonModel[]>([]);

    useEffect(() => {
        async function fetchPosts() {
            const allPostsJson: IPostJsonModel[] = await loadPosts();
            setPosts(allPostsJson);
        }
        fetchPosts().catch(console.error);
    }, []);
    return (
        <ul className="flex flex-wrap justify-center self-center gap-10">
            {posts.map((post, id: number) => (
                <PostJsonplaceholderComponent key={id} post={post} />
            ))}
        </ul>
    );
};
