import {Link, Outlet} from "react-router-dom";

export const CommentsPage = () => {
    return (
        <>
            <div >

                <ul  className=' flex self-center justify-evenly mt-20  w-full '>
                    <li className='flex flex-col text-l shadow-xl'><Link to={'jsonplaceholder'}>Comments Jsonplaceholder</Link></li>
                </ul>

            </div>
            <Outlet/>

        </>
    );
};

