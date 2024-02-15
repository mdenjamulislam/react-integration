import React from "react";

const Login = () => {
    return (
        <section className="w-full h-screen flex items-center justify-center">
            <div className="w-full md:w-96 bg-slate-600 drop-shadow-md rounded-2xl">
                <div className="p-5 md:p-10 lg:p-14 space-y-5 md:space-y-8 bg-bgLight rounded-2xl">
                    <h2 className="heading--two">Login</h2>
                    <form action="" className="space-y-4">
                        <div className="flex flex-col gap-2">
                            <label for="email" className="text-sm">
                                Email/Username
                            </label>
                            <input type="email" name="email" id="email" placeholder="Enter your email/username" className="w-full px-3.5 py-2 md:px-5 md:py-3 text-sm rounded-xl bg-white outline-none focus:border-accent focus:outline-none focus:bg-white" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label for="password" className="text-sm">
                                Password
                            </label>
                            <input type="password" name="password" id="password" placeholder="Enter your password" className="w-full px-3.5 py-2 md:px-5 md:py-3 text-sm rounded-xl bg-white outline-none focus:border-accent focus:outline-none focus:bg-white" />
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <input type="checkbox" name="remember" id="remember" className="w-4 h-4 border rounded" />
                                <label for="remember" className="text-sm">
                                    Remember me
                                </label>
                            </div>
                            <a href="forgot-password.html" className="text-accent text-sm">
                                Forgot Password?
                            </a>
                        </div>
                        <button type="button" className="button--filled w-full justify-center">
                            Sign in
                            <span className="text-sm material-symbols-rounded"> login </span>
                        </button>
                        <p className="text-center text-sm">
                            Don't have an account?{" "}
                            <a href="register.html" className="text-accent">
                                Register
                            </a>
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Login;
