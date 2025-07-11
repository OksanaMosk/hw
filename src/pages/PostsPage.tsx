import {Link, Outlet} from "react-router-dom";


export const PostsPage = () => {
    return (
        <>
            <div>

                <ul  className=' flex self-center justify-evenly mt-20  w-full '>
                    <li className='flex flex-col text-l shadow-xl'><Link to={'jsonplaceholder'}>Posts Jsonplaceholder</Link></li>
                    <li className='flex flex-col text-l shadow-xl'><Link to={'dummyjson'}>Posts Dummyjson</Link></li>
                </ul>

            </div>
            <Outlet/>

        </>
    );
};


