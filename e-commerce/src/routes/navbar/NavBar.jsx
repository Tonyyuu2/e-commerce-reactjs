import React from "react";
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import { Outlet, Link } from "react-router-dom";
import './navbar.styles.scss'

function NavBar() {
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo"/>
        </Link>
        <div className="links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default NavBar;
