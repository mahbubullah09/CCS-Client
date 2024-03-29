import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "./Provider/authProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const navlink = (
    <div className=" gap-4 flex flex-col lg:flex-row ">
      <ul className="py-1">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#011aff] after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#011aff] after:w-full after:scale-x-0"
              : ""
          }
        >
          Home
        </NavLink>
      </ul>

      <ul className="py-1">
        <NavLink
          to="/contact"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#011aff] after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#011aff] after:w-full after:scale-x-0"
              : ""
          }
        >
          Contact us
        </NavLink>
      </ul>
      <ul className="py-1">
        <NavLink
          to="/chat"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#011aff] after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#011aff] after:w-full after:scale-x-0"
              : ""
          }
        >
          Chat
        </NavLink>
      </ul>
    </div>
  );
  return (
    <div>
      <div className="bg-white z-50">
        <div className="navbar Montserrat font-semibold  max-w-6xl mx-auto   ">
          <div className="navbar-start ">
            <Link to={"/"}>
              <h2 className="bg-[#272770]  text-white rounded-full px-4 py-1 text-center ">
                {" "}
                Piriva
                <span className="text-[#ffd900] font-bold text-xl">Talk</span>
              </h2>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex   rounded-full">
            <ul className="menu menu-horizontal px-4 "></ul>
          </div>
          <div className="navbar-end ">
            <div className="hidden lg:flex">
              {navlink}{" "}
              <div className="mx-4">
                {user?.email ? (
                  <div>
                    <Link to={"/"}>
                      <button
                        className=" text-base font-semibold hover:bg-[#9dd51f] hover:text-black bg-[#28844b] text-white  py-2 px-4 rounded-md hover:bg-blue-gray-800"
                        onClick={logOut}
                      >
                        Logout
                      </button>
                    </Link>
                  </div>
                ) : (
                  <div className=" text-base font-semibold hover:bg-[#9dd51f] hover:text-black bg-[#28844b] text-white  py-2 px-4 rounded-md hover:bg-blue-gray-800 ">
                    <Link to={"login"}>Log In</Link>
                  </div>
                )}
              </div>
            </div>

            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex="0"
                className="menu  dropdown-content z-10 shadow bg-base-100 rounded-box w-52 ms-auto"
              >
                {navlink}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
