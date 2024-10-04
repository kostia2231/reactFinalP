import { NavLink } from "react-router-dom";
import { TypographyH4 } from "../ui/typo/typographyH4";
import MainLogo from "../../assets/svg/logo.svg";
import Cart from "../../assets/svg/cart.svg";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between p-8 border-b">
      <div>
        <NavLink to="/">
          <img src={MainLogo} alt="Main Logo" height="70px" />
        </NavLink>
      </div>
      <nav className="flex gap-8">
        <NavLink
          to="/"
          style={({ isActive }) => ({
            color: isActive ? "#0D50FF" : "#282828",
          })}
        >
          <TypographyH4>Main Page</TypographyH4>
        </NavLink>
        <NavLink
          to="/categories"
          style={({ isActive }) => ({
            color: isActive ? "#0D50FF" : "#282828",
          })}
        >
          <TypographyH4>Categories</TypographyH4>
        </NavLink>
        <NavLink
          to="/all-products"
          style={({ isActive }) => ({
            color: isActive ? "#0D50FF" : "#282828",
          })}
        >
          <TypographyH4>All Products</TypographyH4>
        </NavLink>
        <NavLink
          to="/all-sales"
          style={({ isActive }) => ({
            color: isActive ? "#0D50FF" : "#282828",
          })}
        >
          <TypographyH4>All Sales</TypographyH4>
        </NavLink>
      </nav>
      <div>
        <NavLink to="/cart">
          <img src={Cart} alt="Main Logo" />
        </NavLink>
      </div>
    </div>
  );
}
