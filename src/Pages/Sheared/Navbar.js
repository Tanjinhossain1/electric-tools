import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {
    const [user] = useAuthState(auth)
    const logout = () => {
        signOut(auth);
    };
    const navItems = <>
        <li className='text-xl'><Link to='/home'>Home</Link></li>
        {user &&
            <li className='text-xl'><Link to='/dashboard'>Dashboard</Link></li>
        }
        {user ? <li><button className='btn btn-ghost text-xl' onClick={() => logout()}>Log Out
            <div class="avatar">
                <div class="w-5 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img alt='userPhoto' src={user?.photoURL}/>
                </div>
            </div>
        </button>
        </li>
            :
            <li className='text-xl'><Link to='/login'>Login</Link></li>
        }
    </>
    return (
        <div>
            <div class="navbar bg-base-100">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabIndex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>{navItems}</li>
                        </ul>
                    </div>
                    <Link to='/home' class="btn btn-ghost normal-case text-xl">Electric-Tools</Link>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal p-0">
                        <li>  {navItems} </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;