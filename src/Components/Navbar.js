

import React from 'react'; 
import {  Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="d-flex justify-content-center navbar navbar-expand-lg navbar-light bg-dark">

      <li className="nav-item active mx-3">
        <Link to="/" className="text-white nav-link">
          Home
        </Link>
      </li>

      <li className="nav-item active mx-3">
        <Link to="/bookings" className="text-white nav-link">
          All Bookings
        </Link>
      </li>

      <li className="nav-item active mx-3">
        <Link to="/create" className="text-white nav-link">
          Book Room
        </Link>
      </li>

    </div>
  );
};
export default Navbar;