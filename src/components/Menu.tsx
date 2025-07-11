import {Link} from "react-router-dom";


export const Menu = () => {
    return (
        <div className=' h-[10vh] '>
            <ul  className=' flex justify-evenly bg-lime-50 w-full self-center h-full '>
                <li className='self-center'><Link to={'/users'}>Users</Link></li>
                <li className='self-center'><Link to={'/posts'}>Posts</Link></li>
                <li className='self-center'><Link to={'/comments'}>Comments</Link></li>
                <li className='self-center'><Link to={'/products'}>Products</Link></li>
            </ul>
        </div>
    );
};

