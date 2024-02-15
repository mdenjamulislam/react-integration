import React from "react";
import { NavLink } from "react-router-dom";

const Register = () => {
    return (
        <div className="w-full md:w-96 mx-auto bg-slate-600 drop-shadow-md rounded-2xl">
            <div className="p-5 space-y-5 md:space-y-8 bg-bgLight rounded-2xl">
                <h2 className="text-xl md:text-3xl font-semibold text-white">Register An Account</h2>
                <form action="" className="space-y-4 text-white">
                    <div className="flex flex-col md:flex-row gap-4 w-full">
                        <div className="space-y-2">
                            <label for="firstname" className="text-sm text-white">
                                First Name
                            </label>
                            <input type="text" name="firstname" id="firstname" placeholder="First Name" required className="w-full px-3.5 py-2 md:px-5 md:py-3 text-sm rounded-xl bg-white outline-none focus:border-accent focus:outline-none focus:bg-white" />
                        </div>
                        <div className="space-y-2">
                            <label for="lastname" className="text-sm">
                                Last Name
                            </label>
                            <input type="text" name="lastname" id="lastname" placeholder="Last Name" required className="w-full px-3.5 py-2 md:px-5 md:py-3 text-sm rounded-xl bg-white outline-none focus:border-accent focus:outline-none focus:bg-white" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label for="email" className="text-sm">
                            Email
                        </label>
                        <input type="email" name="email" id="email" placeholder="Enter your email" required className="w-full px-3.5 py-2 md:px-5 md:py-3 text-sm rounded-xl bg-white outline-none focus:border-accent focus:outline-none focus:bg-white" />
                    </div>
                    <div className="space-y-2">
                        <label for="password" className="text-sm">
                            Password
                        </label>
                        <input type="password" name="password" id="password" placeholder="Enter your password" required className="w-full px-3.5 py-2 md:px-5 md:py-3 text-sm rounded-xl bg-white outline-none focus:border-accent focus:outline-none focus:bg-white" />
                        <label for="password" className="text-xs text-textColor">
                            (Password shuld be strong)
                        </label>
                    </div>
                    <button type="submit" className="flex px-4 py-3 text-sm text-white w-full justify-center bg-sky-500 rounded-xl hover:bg-sky-700">
                        Register
                    </button>
                    <p className="text-center text-sm">
                        I have an account.{" "}
                        <NavLink to="/login" className="text-accent">
                            Login
                        </NavLink>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Register;
