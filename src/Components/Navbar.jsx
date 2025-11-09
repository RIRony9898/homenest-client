import { useContext } from "react";
import { Link, NavLink } from "react-router";
import logo from "../assets/logo.png";
import userlogo from "../assets/user-logo.png";
import { AuthContext } from "../AuthContexts/AuthContext";
import Container from "../Components/Container";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const handleSignOut = () => {
    signOutUser()
      .then(() => {})
      .catch(() => {});
  };
  const links = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive
              ? "text-purple-400 font-bold"
              : "text-gray-300 hover:text-purple-400 transition-colors duration-200"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/property"}
          className={({ isActive }) =>
            isActive
              ? "text-purple-400 font-bold"
              : "text-gray-300 hover:text-purple-400 transition-colors duration-200"
          }
        >
          Property
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/news"}
          className={({ isActive }) =>
            isActive
              ? "text-purple-400 font-bold"
              : "text-gray-300 hover:text-purple-400 transition-colors duration-200"
          }
        >
          News
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/about"}
          className={({ isActive }) =>
            isActive
              ? "text-purple-400 font-bold"
              : "text-gray-300 hover:text-purple-400 transition-colors duration-200"
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/contact"}
          className={({ isActive }) =>
            isActive
              ? "text-purple-400 font-bold"
              : "text-gray-300 hover:text-purple-400 transition-colors duration-200"
          }
        >
          Contact
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 shadow-lg border-b border-purple-800">
      <Container>
        <div className="navbar ">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-slate-800 rounded-box z-1 mt-3 w-52 p-2 shadow-lg border border-purple-700"
              >
                {links}
              </ul>
            </div>
            <div className="flex items-center">
              <img src={logo} alt="HomeNest Logo" />
              <a className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-bold text-2xl">
                HomeNest
              </a>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>
          <div className="navbar-end">
            {user ? (
              <>
                <Link to={"/profile"}>
                  <div className="avatar">
                    <div className="w-10 rounded-full mx-2 ring-2 ring-purple-400">
                      <img src={user.photoURL || userlogo} />
                    </div>
                  </div>
                </Link>
                <Link
                  to={"/profile"}
                  className="mr-4 font-semibold text-white hover:text-purple-400 transition-colors duration-200"
                >
                  {user.displayName || user.email}
                </Link>
                <button
                  onClick={handleSignOut}
                  className="btn bg-purple-600 hover:bg-purple-700 text-white border-purple-600"
                >
                  Sign out
                </button>
              </>
            ) : (
              <Link
                to={"/login"}
                className="btn bg-purple-600 hover:bg-purple-700 text-white border-purple-600"
              >
                Sign in
              </Link>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
