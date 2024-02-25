import React from "react";

const Profile = () => {
    return (
        <section className="sectionInner--padding">
            {/* Container */}
            <div className="container">
                <div className="grid grid-cols-12 gap-5">
                    <aside className="hidden lg:block col-span-full lg:col-span-4 xl:col-span-3">
                        <nav className="p-4 md:p-5 bg-white drop-shadow-lg rounded-xl">
                            <ul className="flex flex-col gap-4 md:gap-5">
                                <li>
                                    <a href="user-dashboard.html" className="text-sm md:text-base text-textColor hover:text-accent transition-all duration-150">
                                        <i className="fa-solid fa-house mr-1" /> Dashboard
                                    </a>
                                </li>
                                <li>
                                    <a href="booking-request.html" className="text-sm md:text-base text-textColor hover:text-accent transition-all duration-150">
                                        <i className="fa-solid fa-table-list mr-1" /> Booking Requests
                                    </a>
                                </li>
                                <li>
                                    <a href="my-booking.html" className="text-sm md:text-base text-textColor hover:text-accent transition-all duration-150">
                                        <i className="fa-solid fa-file-lines mr-1" /> My Booking
                                    </a>
                                </li>
                                <li>
                                    <a href="payment.html" className="text-sm md:text-base text-textColor hover:text-accent transition-all duration-150">
                                        <i className="fa-solid fa-credit-card mr-1" /> Payments
                                    </a>
                                </li>
                                <li>
                                    <a href="user-profile.html" className="text-sm md:text-base text-textColor hover:text-accent transition-all duration-150">
                                        <i className="fa-solid fa-gear mr-1" /> Profile Setting
                                    </a>
                                </li>
                                <li>
                                    <a href="change-password.html" className="text-sm md:text-base text-textColor hover:text-accent transition-all duration-150">
                                        <i className="fa-solid fa-lock mr-1" /> Change Password
                                    </a>
                                </li>
                                <li>
                                    <a className="text-sm md:text-base text-textColor hover:text-accent transition-all duration-150">
                                        <i className="fa-solid fa-right-from-bracket mr-1" /> Logout
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </aside>
                    {/* End of the side menu */}
                    <div className="col-span-full lg:col-span-8 xl:col-span-9 space-y-4 md:space-y-5">
                        <h2 className="heading--four">Booking Overview</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
                            <div className="flex items-center gap-2.5 p-2.5 md:p-4 border border-textColor rounded-xl">
                                <div className="flex items-center justify-center w-10 md:w-16 h-10 md:h-16 bg-gray-200 rounded-full">
                                    <i className="fa-solid fa-file-invoice text-lg md:text-2xl lg:text-3xl text-accent" />
                                </div>
                                <div>
                                    <h4 className="text-base md:text-lg font-semibold">Total</h4>
                                    <span className="text-sm md:text-base">05</span>
                                </div>
                            </div>
                            {/* End Card */}
                            <div className="flex items-center gap-2.5 p-2.5 md:p-4 border border-textColor rounded-xl">
                                <div className="flex items-center justify-center w-10 md:w-16 h-10 md:h-16 bg-gray-200 rounded-full">
                                    <i className="fa-solid fa-arrows-rotate text-lg md:text-2xl lg:text-3xl text-slate-700" />
                                </div>
                                <div>
                                    <h4 className="text-base md:text-lg font-semibold">Pending</h4>
                                    <span className="text-sm md:text-base">05</span>
                                </div>
                            </div>
                            {/* End Card */}
                            <div className="flex items-center gap-2.5 p-2.5 md:p-4 border border-textColor rounded-xl">
                                <div className="flex items-center justify-center w-10 md:w-16 h-10 md:h-16 bg-gray-200 rounded-full">
                                    <i className="fa-solid fa-check text-lg md:text-2xl lg:text-3xl text-green-700" />
                                </div>
                                <div>
                                    <h4 className="text-base md:text-lg font-semibold">Active</h4>
                                    <span className="text-sm md:text-base">05</span>
                                </div>
                            </div>
                            {/* End Card */}
                            <div className="flex items-center gap-2.5 p-2.5 md:p-4 border border-textColor rounded-xl">
                                <div className="flex items-center justify-center w-10 md:w-16 h-10 md:h-16 bg-gray-200 rounded-full">
                                    <i className="fa-solid fa-xmark text-lg md:text-2xl lg:text-3xl text-red-700" />
                                </div>
                                <div>
                                    <h4 className="text-base md:text-lg font-semibold">Canceled</h4>
                                    <span className="text-sm md:text-base">05</span>
                                </div>
                            </div>
                            {/* End Card */}
                            <div className="flex items-center gap-2.5 p-2.5 md:p-4 border border-textColor rounded-xl">
                                <div className="flex items-center justify-center w-10 md:w-16 h-10 md:h-16 bg-gray-200 rounded-full">
                                    <i className="fa-solid fa-calendar-days text-lg md:text-2xl lg:text-3xl text-slate-700" />
                                </div>
                                <div>
                                    <h4 className="text-base md:text-lg font-semibold">Checked out</h4>
                                    <span className="text-sm md:text-base">05</span>
                                </div>
                            </div>
                            {/* End Card */}
                            <div className="flex items-center gap-2.5 p-2.5 md:p-4 border border-textColor rounded-xl">
                                <div className="flex items-center justify-center w-10 md:w-16 h-10 md:h-16 bg-gray-200 rounded-full">
                                    <i className="fa-solid fa-credit-card text-lg md:text-2xl lg:text-3xl text-green-700" />
                                </div>
                                <div>
                                    <h4 className="text-base md:text-lg font-semibold">Payments</h4>
                                    <span className="text-sm md:text-base">05</span>
                                </div>
                            </div>
                            {/* End Card */}
                        </div>
                        {/* End of the grid */}
                        <h2 className="heading--four">Recent Booking</h2>
                        <div className="overflow-x-auto">
                            <table className="table table-zebra">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th>Booking ID</th>
                                        <th>Check in - Check out</th>
                                        <th>Total Amount</th>
                                        <th>Due</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* row 1 */}
                                    <tr>
                                        <td>#23243254356</td>
                                        <td>10/02/2024 - 14/02/2024</td>
                                        <td>৳12000</td>
                                        <td>৳00</td>
                                        <td>
                                            <span className="badge badge-success text-xs text-white">Active</span>
                                        </td>
                                        <td className="flex items-center gap-2">
                                            <button className="p-1.5 text-xs border border-accent rounded-md hover:bg-gray-200">Pay Now</button>
                                            <button onclick="booking_room_details.showModal()" className="p-1.5 text-xs border border-accent rounded-md hover:text-white hover:bg-accent">
                                                View
                                            </button>
                                        </td>
                                    </tr>
                                    {/* row 2 */}
                                    <tr>
                                        <td>#23243254356</td>
                                        <td>10/02/2024 - 14/02/2024</td>
                                        <td>৳12000</td>
                                        <td>৳00</td>
                                        <td>
                                            <span className="badge badge-primary text-xs text-white">Pending</span>
                                        </td>
                                        <td className="flex items-center gap-2">
                                            <button className="p-1.5 text-xs border border-accent rounded-md hover:bg-gray-200 opacity-60">Pay Now</button>
                                            <button onclick="booking_room_details.showModal()" className="p-1.5 text-xs border border-accent rounded-md hover:text-white hover:bg-accent">
                                                View
                                            </button>
                                        </td>
                                    </tr>
                                    {/* row 3 */}
                                    <tr>
                                        <td>#23243254356</td>
                                        <td>10/02/2024 - 14/02/2024</td>
                                        <td>৳12000</td>
                                        <td>৳00</td>
                                        <td>
                                            <span className="badge badge-success text-xs text-white">Active</span>
                                        </td>
                                        <td className="flex items-center gap-2">
                                            <button className="p-1.5 text-xs border border-accent rounded-md hover:bg-gray-200">Pay Now</button>
                                            <button onclick="booking_room_details.showModal()" className="p-1.5 text-xs border border-accent rounded-md hover:text-white hover:bg-accent">
                                                View
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        {/* end booking table */}
                        {/* Booking Room Details */}
                        <dialog id="booking_room_details" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-sm btn-ghost absolute right-1 top-1 border-none outline-none">✕</button>
                                </form>
                                <div className="modal-content">
                                    <div className="flex items-center justify-between gap-5">
                                        <h2 className="heading--four">Booking Details</h2>
                                        <div className="flex items-center gap-2">
                                            <button className="button--small">
                                                <i className="fa-solid fa-print" />
                                            </button>
                                            <button className="button--small">
                                                <i className="fa-solid fa-cloud-arrow-down" />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="card card-side bg-base-100 shadow-xl">
                                        <figure>
                                            <img src="assets/images/rooms/1.png" alt="room" />
                                        </figure>
                                        <div className="card-body space-y-3">
                                            <div>
                                                <h2 className="text-base md:text-lg font-medium text-primary">Ecenomy Room</h2>
                                                <span className="text-xs text-textColor">#2324234234</span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <div className="space-y-1 text-center">
                                                    <p className="text-sm">Room</p>
                                                    <span className="text-xs">VIP</span>
                                                </div>
                                                <div className="space-y-1 text-center">
                                                    <p className="text-sm">Type</p>
                                                    <span className="text-xs">AC</span>
                                                </div>
                                                <div className="space-y-1 text-center">
                                                    <p className="text-sm">Beds</p>
                                                    <span className="text-xs">1Bed</span>
                                                </div>
                                                <div className="space-y-1 text-center">
                                                    <p className="text-sm">Room</p>
                                                    <span className="text-xs">VIP</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </dialog>
                        {/* End of the booking room details */}
                    </div>
                </div>
                {/* End of the grid */}
            </div>
            {/* End of the container */}
        </section>
    );
};

export default Profile;
