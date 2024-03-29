import {
  HiMagnifyingGlass,
  HiChevronRight,
  HiChevronLeft,
  HiOutlineUser,
  HiOutlineLightBulb,
  HiMiniArrowRightOnRectangle,
} from "react-icons/hi2";
import { NavLink } from "react-router-dom";
import logo from "@/assets/ArtisanLogo.png";
import { useState } from "react";

function Navbar({ isAssessmentOpen }) {
  const [openSidebar, setOpenSidebar] = useState(false);

  const arrowStyle =
    "cursor-pointer absolute -right-3 top-9 border-2 text-2xl p-1 bg-white border-indigo-800 rounded-full text-zinc-400";

  const linkClass = ({ isActive }) =>
    isActive
      ? `mt-2 mb-2 text-gray-100 bg-indigo-400 flex text-2xl items-center gap-x-4 cursor-pointer p-2 rounded-md transition duration-200 ease-in-out`
      : `text-gray-100 flex text-2xl items-center gap-x-4 cursor-pointer p-2 hover:bg-indigo-700 rounded-md transition duration-200 ease-in-out`;

  return (
    <nav className="fixed">
      <div
        className={`${
          openSidebar ? "w-72" : "w-20"
        } duration-300 h-[calc(100vh+100px)] bg-indigo-800 relative p-5 pt-8`}
      >
        {!openSidebar ? (
          <HiChevronRight
            onClick={() => setOpenSidebar(!openSidebar)}
            className={arrowStyle}
          />
        ) : (
          <HiChevronLeft
            onClick={() => setOpenSidebar(!openSidebar)}
            className={arrowStyle}
          />
        )}
        <div className="flex items-center gap-x-4">
          <img src={logo} className="cursor-pointer w-16 duration-500" />
          <h1
            className={`text-white origin-left font-medium text-xl duration-300 ${
              !openSidebar && "scale-0"
            }`}
          >
            Artisan Peeper
          </h1>
        </div>

        <NavLink to="/dashboard" className={linkClass}>
          <HiMagnifyingGlass className="text-gray-100" />
          <span
            className={`text-sm ${
              !openSidebar && "hidden"
            } origin-left duration-200`}
          >
            Explore
          </span>
        </NavLink>

        <NavLink to="/assessment-dashboard" className={linkClass}>
          <HiOutlineLightBulb />
          <span
            className={`text-gray-100 text-sm ${
              !openSidebar && "hidden"
            } origin-left duration-200`}
          >
            Assessment
          </span>
        </NavLink>

        <NavLink to="/profile" className={linkClass}>
          <HiOutlineUser />
          <span
            className={`text-gray-100 text-sm ${
              !openSidebar && "hidden"
            } origin-left duration-200`}
          >
            Profile
          </span>
        </NavLink>

        <NavLink to="/login" className={linkClass}>
          <HiMiniArrowRightOnRectangle />
          <span
            className={`text-gray-100 text-sm ${
              !openSidebar && "hidden"
            } origin-left duration-200`}
          >
            Log-out
          </span>
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
