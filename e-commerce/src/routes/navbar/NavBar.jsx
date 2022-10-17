import React, { useContext } from "react";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { Outlet } from "react-router-dom";
import { NavigationContainer, LogoContainer, NavLink, NavLinksContainer } from "./navbar.styles";
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
        <NavLinksContainer>
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
        </NavLinksContainer>
        {isCartOpen && <CartDropDown /> }
      </NavigationContainer>
      <Outlet />
    </>
  );
}

export default NavBar;
