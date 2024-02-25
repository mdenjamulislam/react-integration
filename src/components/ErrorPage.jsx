import { NavLink } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div class="mockup-window border bg-base-300 h-screen">
            <div class="flex flex-col justify-center px-4 py-20 items-center gap-8">
                <h2 className="text-xl md:text-3xl font-semibold">Page Not Found!</h2>
                <button className="btn"><NavLink to="/">Back to Home</NavLink></button>
            </div>
        </div>
    );
};

export default ErrorPage;
