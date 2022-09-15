import React, { useContext } from "react";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { Outlet, Link } from "react-router-dom";
import "./navbar.styles.scss";
import { signOutUser } from "../../utils/firebase.utils";

import { UserContext } from "../../context/user.context";

function NavBar() {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  console.log("currentUser :", currentUser);

  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
  };
  
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutHandler}>
              {`Hello ${currentUser.email}`} Logout
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              Login
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default NavBar;
