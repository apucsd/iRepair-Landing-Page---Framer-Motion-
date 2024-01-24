import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <header className="h-16 ">
      <nav className="flex h-full  justify-between items-center w-full max-w-[1220px] mx-auto px-[20px]">
        <span className="text-3xl">iRepair</span>
        <ul className="space-x-5">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/login">
            <Button>Login</Button>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;