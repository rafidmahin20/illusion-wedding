import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import auth from '../Firebase/Firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleLogout = () =>{
        signOut(auth);
    }
    return (
        <div className='sticky top-0 bg-slate-400 px-12 py-8 flex justify-center md:justify-between'>
            <div className='hidden md:block'>
                <Link to='/' className='font-sans font-bold text-4xl text-emerald-700'>Illusion Wedding</Link>
            </div>
            <div className='flex gap-3 text-xl'>
                <CustomLink to='/'>Home</CustomLink>
                <CustomLink to='/services'>Services</CustomLink>
                <CustomLink to='/blogs'>Blogs</CustomLink>
                <CustomLink to='/aboutme'>About Me</CustomLink>
                {
                user ?
                    <button onClick={handleLogout} className='nav-item px-3 py-2 hover:opacity-50 font-semibold'>Logout</button>
                    :
                    <CustomLink as={Link} to='/login'>Login</CustomLink>
                }
            </div>
            
        </div>
    );
};

export default Header;