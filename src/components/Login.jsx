import React from "react";
import { NavLink } from "react-router-dom";

const Login = () => {

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.value.email;
        const password = e.target.value.password;
    }
    return (
        <section className="w-full flex items-center justify-center">
            <div className="w-full md:w-96 bg-slate-600 drop-shadow-md rounded-2xl">
                <div className="p-5 space-y-5 md:space-y-8 bg-bgLight rounded-2xl">
                    <h2 className="text-xl md:text-2xl font-semibold text-white">Login</h2>
                    <form onSubmit={handleLogin} className="space-y-4">
                        <div className="flex flex-col gap-2">
                            <label for="email" className="text-sm text-white">
                                Email/Username
                            </label>
                            <input type="email" name="email" id="email" placeholder="Enter your email/username" className="w-full px-3.5 py-2 md:px-5 md:py-3 text-sm rounded-xl bg-white outline-none focus:border-accent focus:outline-none focus:bg-white" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label for="password" className="text-sm text-white">
                                Password
                            </label>
                            <input type="password" name="password" id="password" placeholder="Enter your password" className="w-full px-3.5 py-2 md:px-5 md:py-3 text-sm rounded-xl bg-white outline-none focus:border-accent focus:outline-none focus:bg-white" />
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <input type="checkbox" name="remember" id="remember" className="w-4 h-4 rounded" />
                                <label for="remember" className="text-sm text-white">
                                    Remember me
                                </label>
                            </div>
                            <a href="forgot-password.html" className="text-accent text-sm">
                                Forgot Password?
                            </a>
                        </div>
                        <button type="submit" className="flex px-4 py-3 text-sm text-white w-full justify-center bg-sky-500 rounded-xl hover:bg-sky-700">
                            Sign in
                        </button>
                        <p className="text-center text-sm text-white">
                            Don't have an account?{" "}
                            <NavLink to="/register" className="text-accent">
                                Register
                            </NavLink>
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Login;
