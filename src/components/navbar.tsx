import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed h-[6rem] w-full border px-10 flex items-center justify-between">
      <Link className="text-[20px]" to="/">
        BreatheGreen
      </Link>
      <Link to="/authentication">Admin</Link>
    </nav>
  );
};

export default Navbar;
