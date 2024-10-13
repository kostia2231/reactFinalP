import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { TypographyH4 } from "../ui/typo/typographyH4";
import MainLogo from "../../assets/svg/logo.svg";
import CartLink from "../cartLink";

const Navbar = React.memo(() => {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <div className="flex items-center justify-between p-8 border-b">
      <div>
        <NavLink to="/">
          <img src={MainLogo} alt="Main Logo" height="70px" />
        </NavLink>
      </div>
      <nav className="flex gap-8">
        <NavLink to="/">
          <TypographyH4 moreStyle="hover:text-[#0D50FF] transition">
            Main Page
          </TypographyH4>
        </NavLink>
        <NavLink
          to="/categories"
          style={{
            color: pathname === "/categories" ? "#0D50FF" : "#282828",
          }}
        >
          <TypographyH4 moreStyle="hover:text-[#0D50FF] transition">
            Categories
          </TypographyH4>
        </NavLink>
        <NavLink
          to="/all-products"
          style={{
            color: pathname === "/all-products" ? "#0D50FF" : "#282828",
          }}
        >
          <TypographyH4 moreStyle="hover:text-[#0D50FF] transition">
            All Products
          </TypographyH4>
        </NavLink>
        <NavLink
          to="/all-sales"
          style={{
            color: pathname === "/all-sales" ? "#0D50FF" : "#282828",
          }}
        >
          <TypographyH4 moreStyle="hover:text-[#0D50FF] transition">
            All Sales
          </TypographyH4>
        </NavLink>
      </nav>
      <div>
        <CartLink />
      </div>
    </div>
  );
}, "Navbar");

Navbar.displayName = "Navbar";

export default Navbar;
