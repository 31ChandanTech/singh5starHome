import React, { useState, useEffect } from "react";
import "./Header.css";
import Button from "./Button";
import Navbar from "./Navbar";
import { useAuth0 } from "@auth0/auth0-react";
import Hamburger from "./Hamburger";
import HamburgerMenu from "./HamburgerMenu";

const Header = () => {
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { user, isAuthenticated } = useAuth0();

  const [classVal, setClassVal] = useState("header_col");
  const [toggleMenu, setToggleMenu] = useState('HamburgerMenuHide')

  useEffect(() => {
    window.addEventListener("scroll", IsSticky);
    return () => {
      window.removeEventListener("scroll", IsSticky);
    };
  }, []);

  const IsSticky = () => {
    const ScrollVal = window.scrollY;
    const stickyClass = ScrollVal > 0.1 ? "header_row" : "header_col";
    setClassVal(stickyClass);
  };

  const LinkDetails = [
    { url: "/menu", text: "MENU" },
    { url: "/store", text: "MOTHER'S DAY GIFT BOXES" },
    { url: "/art", text: "ART" },
    { url: "/drag-brunch", text: "DRAG BRUNCH" },
    { url: "/private-dining", text: "PRIVATE DINING" },
    { url: "/catering", text: "CATERING" },
  ];

  const openMenu = () => setToggleMenu('HamburgerMenu');
  const closeMenu = () => setToggleMenu('HamburgerMenuHide');

  return (
    <header className={classVal}>
      <h1 className="logo_text">
        SINGH <span>5'star</span>
      </h1>
      <div className="flex">
        <nav className="navbar">
          <ul>
            <Navbar className="Hlist" listArray={LinkDetails} />
            {isAuthenticated ? (
              <li className="userFlex">
                <span>
                  Hello <b>{user.name}</b>
                </span>
                <Button
                  styleclass="btn"
                  onClicked={() =>
                    logout({

                      logoutParams: { returnTo: window.location.href },
                    })
                  }
                  text="Log Out"
                />
              </li>
            ) : (
              <li className="userFlex">
                <Button
                  styleclass="btn"
                  onClicked={() => loginWithRedirect()}
                  text="Log In"
                />
              </li>
            )}
          </ul>
        </nav>
      </div>

      <Hamburger className="activeHamburger" onclick={openMenu} />

      <HamburgerMenu oncloseMenu={closeMenu} classlist={toggleMenu} listArray={LinkDetails} />
    </header>
  );
};

export default Header;
