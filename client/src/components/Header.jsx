import { Link } from "react-router-dom";
import { MagnifyingGlassIcon } from "@heroicons-animated/react";

const Header = () => {
  return (
    <header className="bg-gray-50 shadow-2xs">
      <div className="flex justify-around items-center p-4">
        <Link to="/">
          <div className="font-semibold flex flex-wrap text-lg sm:text-xl md:text-2xl">
            <span className="text-cyan-500 -mt-1">Mind</span>
            <span className="text-orange-600 mt-3 -ml-6">Journey</span>
          </div>
        </Link>
        <form className="flex bg-white border border-gray-200 rounded-full px-4 py-1">
          <input
            type="text"
            placeholder="Search..."
            className="text-gray-700 text-2sm md:text-lg focus:outline-none w-20 md:w-30 xl:w-40"
          />
          <MagnifyingGlassIcon className="w-6 h-6 text-gray-400 opacity-70" />
        </form>
        <nav>
          <ul className="flex space-x-3">
            <Link to="/">
              <li>
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-900 hidden md:inline-block"
                >
                  Home
                </a>
              </li>
            </Link>
            <Link to="/account">
              <li>
                <a href="#" className="text-gray-500 hover:text-gray-900">
                  Account
                </a>
              </li>
            </Link>
            <Link to="/courses">
              <li>
                <a href="#" className="text-gray-500 hover:text-gray-900">
                  Courses
                </a>
              </li>
            </Link>
            <Link to="/login">
              <li>
                <a href="#" className="text-gray-500 hover:text-gray-900">
                  Login
                </a>
              </li>
            </Link>
            <Link to="/info">
              <li>
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-900 hidden md:inline-block"
                >
                  Info
                </a>
              </li>
            </Link>
            <Link to="/settings">
              <li>
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-900 hidden md:inline-block"
                >
                  Settings
                </a>
              </li>
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
