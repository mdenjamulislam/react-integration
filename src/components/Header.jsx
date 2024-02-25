import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast("Logout Succuessful!");
            })
            .catch((error) => {
                console.error("Logout not successfully! Try again.", error.mesage);
            });
    };

    const navLinks = (
        <>
            <li>
                <NavLink to="/home">Home</NavLink>
            </li>
            <li>
                <NavLink to="/about">About</NavLink>
            </li>
            <li>
                <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
                <NavLink to="/blog">Blogs</NavLink>
            </li>
            <li>
                <NavLink to="/orders">Orders</NavLink>
            </li>
        </>
    );

    return (
        <header>
            <nav className="container navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <a className="text-xl md:text-2xl font-bold">Rauth</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">{navLinks}</ul>
                </div>
                <div className="navbar-end gap-2">
                    {user ? (
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost">
                                <div className="avatar btn btn-circle">
                                    <div className="w-10 rounded-full">
                                        <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>
                                <div className="flex flex-col items-start gap-1">
                                    <span>Enjamul</span>
                                    <span className="text-xs">{user.email}</span>
                                </div>
                            </div>
                            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                <li>
                                    <a className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </a>
                                </li>
                                <li>
                                    <NavLink to="/orders">Order History</NavLink>
                                </li>
                                <li>
                                    <NavLink onClick={handleLogOut} to="/login">
                                        Log Out
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    ) : (
                        <div>
                            <NavLink to="/login" className="btn">
                                Login
                            </NavLink>
                            <NavLink to="/register" className="btn">
                                Sing Up
                            </NavLink>
                        </div>
                    )}
                </div>
            </nav>
            <ToastContainer/>
        </header>
    );
};

export default Header;
