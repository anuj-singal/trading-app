import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "http://localhost:3000";
  };

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} alt="logo" />

      <div className="menus">
        <ul>
          <li>
            <NavLink to="/" className="menu">
              Dashboard
            </NavLink>
          </li>

          <li>
            <NavLink to="/orders" className="menu">
              Orders
            </NavLink>
          </li>

          <li>
            <NavLink to="/holdings" className="menu">
              Holdings
            </NavLink>
          </li>

          <li>
            <NavLink to="/positions" className="menu">
              Positions
            </NavLink>
          </li>

          <li>
            <NavLink to="/funds" className="menu">
              Funds
            </NavLink>
          </li>

          <li>
            <NavLink to="/apps" className="menu">
              Apps
            </NavLink>
          </li>
        </ul>

        <hr />

       <div className="profile-section">
          <div className="profile" onClick={handleProfileClick}>
            <div className="avatar">ZU</div>
            <p className="username">
             
            <div className="dropdown-menu">
              <button className="logout-btn" onClick={handleLogout}>
                Logout
              </button>
            </div>
          
            </p>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default Menu;