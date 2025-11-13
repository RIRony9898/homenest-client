import { Moon, Sun } from "lucide-react";
import { useContext } from "react";
import { Link, NavLink } from "react-router";
import logo from "../assets/logo.png";
import userlogo from "../assets/user-logo.png";
import { AuthContext } from "../AuthContexts/AuthContext";
import Container from "../Components/Container";
import { useTheme } from "../Contexts/ThemeContext";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const { isDarkMode, toggleTheme } = useTheme();
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
              : "text-gray-700 dark:text-gray-300 hover:text-purple-400 transition-colors duration-200"
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
              : "text-gray-700 dark:text-gray-300 hover:text-purple-400 transition-colors duration-200"
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
              : "text-gray-700 dark:text-gray-300 hover:text-purple-400 transition-colors duration-200"
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
              : "text-gray-700 dark:text-gray-300 hover:text-purple-400 transition-colors duration-200"
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
              : "text-gray-700 dark:text-gray-300 hover:text-purple-400 transition-colors duration-200"
          }
        >
          Contact
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink
              to={"/add-properties"}
              className={({ isActive }) =>
                isActive
                  ? "text-purple-400 font-bold"
                  : "text-gray-700 dark:text-gray-300 hover:text-purple-400 transition-colors duration-200"
              }
            >
              Add Properties
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/my-properties"}
              className={({ isActive }) =>
                isActive
                  ? "text-purple-400 font-bold"
                  : "text-gray-700 dark:text-gray-300 hover:text-purple-400 transition-colors duration-200"
              }
            >
              My Properties
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/my-ratings"}
              className={({ isActive }) =>
                isActive
                  ? "text-purple-400 font-bold"
                  : "text-gray-700 dark:text-gray-300 hover:text-purple-400 transition-colors duration-200"
              }
            >
              My Ratings
            </NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="bg-white dark:bg-gradient-to-r dark:from-slate-900 dark:via-purple-900 dark:to-slate-900 shadow-lg border-b border-gray-200 dark:border-purple-800">
      <Container>
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden text-gray-700 dark:text-gray-300"
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
                className="menu menu-sm dropdown-content bg-white dark:bg-slate-800 rounded-box z-1 mt-3 w-52 p-2 shadow-lg border border-gray-200 dark:border-purple-700"
              >
                {links}
              </ul>
            </div>
            <Link to={"/"} className="flex items-center">
              <img src={logo} alt="HomeNest Logo" />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-bold text-2xl">
                HomeNest
              </span>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>
          <div className="navbar-end flex items-center gap-2">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="btn btn-ghost btn-circle text-gray-700 dark:text-gray-300 hover:text-purple-400 transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>

            {user ? (
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="avatar cursor-pointer"
                >
                  <div className="w-10 rounded-full ring-2 ring-purple-400">
                    <img src={user.photoURL || userlogo} alt="User Avatar" />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-white dark:bg-slate-800 rounded-box z-1 w-52 p-2 shadow-lg border border-gray-200 dark:border-purple-700"
                >
                  <li className="menu-title">
                    <span className="text-gray-700 dark:text-gray-300">
                      {user.displayName || user.email}
                    </span>
                  </li>
                  <li>
                    <Link
                      to={"/profile"}
                      className="text-gray-700 dark:text-gray-300 hover:text-purple-400 transition-colors duration-200"
                    >
                      Profile
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={handleSignOut}
                      className="text-gray-700 dark:text-gray-300 hover:text-purple-400 transition-colors duration-200"
                    >
                      Log out
                    </button>
                  </li>
                </ul>
              </div>
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
