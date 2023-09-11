"use client";
/* eslint-disable @next/next/no-img-element */
import React from "react";
import "./style.css";
import { Menu, MenuItem, Tooltip } from "@mui/material";

const Header = () => {
  const [showMenu, setShowMenu] = React.useState<boolean>(false);
  const [display, setDisplay] = React.useState("none");
  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setDisplay(() => (showMenu ? "none" : "flex"));
  };

  const [menuAnchor, setMenuAnchor] = React.useState<null | HTMLElement>(null);
  const handleMenuOpen = (event: {
    currentTarget: React.SetStateAction<HTMLElement | null>;
  }) => setMenuAnchor(event.currentTarget);
  const handleMenuClose = () => setMenuAnchor(null);

  const [supportMenuAnchor, setSupportMenuAnchor] =
    React.useState<null | HTMLElement>(null);
  const handleSupportMenuOpen = (event: {
    currentTarget: React.SetStateAction<HTMLElement | null>;
  }) => setSupportMenuAnchor(event.currentTarget);
  const handleSupportMenuClose = () => setSupportMenuAnchor(null);

  return (
    <header className="headerWrapper">
      <nav className="desktopHeader">
        <div className="headerLogo">
          <a href="https://i-investng.com">
            <img src="/favicon.png" alt="logo" />
          </a>
        </div>
        <div className="header-nav-main">
          <div className="center-nav-links">
            <div className="products-menu-container">
              <a className="products-menu-anchor">
                Products
              </a>
              <div className="products-menu-items-wrapper">
                <div className="products-menu-items-container">
                  <a
                    className="anchor-link"
                    href="https://i-investng.com/treasury-bills/"
                  >
                    Treasury Bills
                  </a>

                  <a
                    className="anchor-link"
                    href="https://i-investng.com/equities/"
                  >
                    Equities
                  </a>

                  <a
                    className="anchor-link"
                    href="https://i-investng.com/fixed-deposits/"
                  >
                    Fixed Deposits
                  </a>

                  <a
                    className="anchor-link"
                    href="https://i-investng.com/commercial-papers/"
                  >
                    Commercial Papers
                  </a>

                  <a
                    className="anchor-link"
                    href="https://i-investng.com/eurobonds/"
                  >
                    Eurobonds
                  </a>

                  <a
                    className="anchor-link"
                    href="https://i-investng.com/insurance/"
                  >
                    Insurance
                  </a>

                  <a
                    className="anchor-link"
                    href="https://i-investng.com/savings/"
                  >
                    Savings
                  </a>

                  <a
                    className="anchor-link"
                    href="https://i-investng.com/mudarabah/"
                  >
                    Mudarabah
                  </a>

                  <a
                    className="anchor-link"
                    href="https://i-investng.com/bill-payments/"
                  >
                    Bill Payments
                  </a>
                </div>
              </div>
            </div>
            <a href="#">Learn</a>
            <div className="support-menu-container">
              <a className="support-menu-anchor">
                Support
              </a>
              <div className="support-menu-items-wrapper">
                <div className="support-menu-items-container">
                  <a href="https://i-investng.com/contact-us/">Contact Us</a>
                  <a href="https://i-investng.com/faqs/">FAQs</a>
                  <a href="https://i-investng.com/getting-started/">
                    Getting started
                  </a>
                  <a href="https://t.me/+sE_l6-xUcFRjZGZk">
                    Join investment community
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="header-cta">
            <a
              href="https://client.i-investng.com/account/login"
              className="nav-login"
            >
              Login
            </a>
            <a
              href="https://client.i-investng.com/account/register"
              className="nav-register"
            >
              Register
            </a>
          </div>
        </div>
        <button className="header-bars" onClick={toggleMenu}>
          <span />
          <span />
        </button>
      </nav>
      <div className="mobileMenu" style={{ display: display }}>
        <div className="mobile-menu-container">
          <a
            onClick={handleMenuOpen}
            style={{ display: "flex", alignItems: "center" }}
            className="menu-item-mobile"
          >
            Products
          </a>
          <a href="#" className="menu-item-mobile">
            Learn
          </a>
          <a
            onClick={handleSupportMenuOpen}
            className="menu-item-mobile"
            style={{ display: "flex", alignItems: "center" }}
          >
            Support
          </a>
          <div className="header-cta">
            <a
              href="https://client.i-investng.com/account/login"
              className="login menu-item-mobile"
            >
              Login
            </a>
            <a
              href="https://client.i-investng.com/account/register"
              className="register"
            >
              Register
            </a>
          </div>
        </div>
        <React.Fragment>
          <Menu
            id="products-menu"
            anchorEl={menuAnchor}
            open={Boolean(menuAnchor)}
            onClose={handleMenuClose}
          >
            <MenuItem sx={{ "&:hover": { background: "transparent" } }}>
              <a
                className="anchor-link"
                href="https://i-investng.com/treasury-bills/"
              >
                Treasury Bills
              </a>
            </MenuItem>
            <MenuItem sx={{ "&:hover": { background: "transparent" } }}>
              <a
                className="anchor-link"
                href="https://i-investng.com/equities/"
              >
                Equities
              </a>
            </MenuItem>
            <MenuItem sx={{ "&:hover": { background: "transparent" } }}>
              <a
                className="anchor-link"
                href="https://i-investng.com/fixed-deposits/"
              >
                Fixed Deposits
              </a>
            </MenuItem>
            <MenuItem sx={{ "&:hover": { background: "transparent" } }}>
              <a
                className="anchor-link"
                href="https://i-investng.com/commercial-papers/"
              >
                Commercial Papers
              </a>
            </MenuItem>
            <MenuItem sx={{ "&:hover": { background: "transparent" } }}>
              <a
                className="anchor-link"
                href="https://i-investng.com/eurobonds/"
              >
                Eurobonds
              </a>
            </MenuItem>
            <MenuItem sx={{ "&:hover": { background: "transparent" } }}>
              <a
                className="anchor-link"
                href="https://i-investng.com/insurance/"
              >
                Insurance
              </a>
            </MenuItem>
            <MenuItem sx={{ "&:hover": { background: "transparent" } }}>
              <a className="anchor-link" href="https://i-investng.com/savings/">
                Savings
              </a>
            </MenuItem>
            <MenuItem sx={{ "&:hover": { background: "transparent" } }}>
              <a
                className="anchor-link"
                href="https://i-investng.com/mudarabah/"
              >
                Mudarabah
              </a>
            </MenuItem>
            <MenuItem sx={{ "&:hover": { background: "transparent" } }}>
              <a
                className="anchor-link"
                href="https://i-investng.com/bill-payments/"
              >
                Bill Payments
              </a>
            </MenuItem>
          </Menu>
          <Menu
            id="support-menu"
            anchorEl={supportMenuAnchor}
            open={Boolean(supportMenuAnchor)}
            onClose={handleSupportMenuClose}
          >
            <MenuItem sx={{ "&:hover": { background: "transparent" } }}>
              <a
                className="anchor-link"
                href="https://i-investng.com/contact-us/"
              >
                Contact Us
              </a>
            </MenuItem>
            <MenuItem sx={{ "&:hover": { background: "transparent" } }}>
              <a className="anchor-link" href="https://i-investng.com/faqs/">
                FAQs
              </a>
            </MenuItem>
            <MenuItem sx={{ "&:hover": { background: "transparent" } }}>
              <a
                className="anchor-link"
                href="https://i-investng.com/getting-started/"
              >
                Getting started
              </a>
            </MenuItem>
            <MenuItem sx={{ "&:hover": { background: "transparent" } }}>
              <a
                className="anchor-link"
                href="https://t.me/+sE_l6-xUcFRjZGZk"
              >
                Join investment community
              </a>
            </MenuItem>
          </Menu>
        </React.Fragment>
        <Tooltip placement="top" title="Close menu">
          <button onClick={toggleMenu} className="close-button">
            <svg
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </Tooltip>
      </div>
    </header>
  );
};

export default Header;
