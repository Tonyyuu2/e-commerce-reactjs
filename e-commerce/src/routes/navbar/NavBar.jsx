import React, { useContext } from "react";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { Outlet, Link } from "react-router-dom";
import "./navbar.styles.scss";
import { signOutUser } from "../../utils/firebase.utils";
import CartIcon from "../../components/cart-icon/CartIcon";
import CartDropDown from "../../components/cart-dropdown/CartDropDown";

import { UserContext } from "../../context/user.context";
import { CartContext } from "../../context/cart.context";

function NavBar() {
  const { currentUser } = useContext(UserContext);
  console.log("currentUser :", currentUser);
  const { isCartOpen } = useContext(CartContext);


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
            <span className="nav-link" onClick={signOutUser}>
              {`Hello ${currentUser.email}`} Logout
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              Login
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropDown /> }
      </div>
      <Outlet />
    </>
  );
}

export default NavBar;
