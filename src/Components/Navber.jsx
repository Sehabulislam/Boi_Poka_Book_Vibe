import React from "react";
import { NavLink } from "react-router";

const Navber = () => {
    const links = <>
        <NavLink to='/' className='hover:border-b-2'>Home</NavLink>
        <NavLink to='/readList' className='hover:border-b-2'>Listed Books</NavLink>
        <NavLink className='hover:border-b-2'>Pages to Read</NavLink>
    </>
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>
        <h2 className="text-3xl font-bold">Book Vibe</h2>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="body-font menu menu-horizontal px-1 gap-6">
          {links}
        </ul>
      </div>
      <div className="navbar-end gap-2 text-white">
        <a className="btn bg-[#23BE0A] text-white">Sign In</a>
        <a className="btn bg-[#59C6D2] text-white">Sign Up</a>
      </div>
    </div>
  );
};

export default Navber;
