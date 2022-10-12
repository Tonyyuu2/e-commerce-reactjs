import React, { useContext } from "react";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { Outlet, Link } from "react-router-dom";
import { NavigationContainer, LogoContainer, NavLink, NavLinks } from "./navbar.styles";
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
      <NavigationContainer >
        <LogoContainer to="/">
          <CrwnLogo />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">
            Shop
          </NavLink>
          {currentUser ? (
            <NavLink as='span' onClick={signOutUser}>
              {`Hello ${currentUser.email}`} Logout
            </NavLink>
          ) : (
            <NavLink to="/auth">
              Login
            </NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropDown /> }
      </NavigationContainer>
      <Outlet />
    </>
  );
}

export default NavBar;
