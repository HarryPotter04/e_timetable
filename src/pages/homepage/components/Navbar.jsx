import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false);

  return (
    <nav className="mx-auto bg-white border-gray-200 ">
      <div className=" max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src="Images/Logo.jpg" className="h-8" alt="ogitech Logo" />
          <span className="self-center tracking-tighter text-xl font-semibold whitespace-nowrap text-black">
            E-Timetable
          </span>
        </Link>
        <Link
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center  w-10 h-10 justify-center text-3xl md:hidden "
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only"></span>
          <i
            className="bi bi-list text-black w-10 h-10"
            onClick={() => setToggleNav((nav) => !nav)}
          ></i>
        </Link>
        <div
          className={`${
            toggleNav ? "block" : "hidden"
          } w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:mt-0 md:flex-row md:space-x-8 rtl:space-x-reverse bg-white">
            <li>
              <a
                href="/"
                className="block py-2 px-3 text-black hover:text-primary rounded md:bg-transparent  md:p-0 dark:text-black "
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/#About"
                className="block py-2 px-3 text-black hover:text-primary rounded md:bg-transparent  md:p-0 dark:text-black"
              >
                About
              </a>
            </li>
            <li>
              <Link
                to="/timetable"
                className="block py-2 px-3 text-black hover:text-primary rounded md:bg-transparent  md:p-0 dark:text-black"
              >
                View Timetable
              </Link>
            </li>
            <li>
              <a
                href="/#footer"
                className="block py-2 px-3 text-black hover:text-primary rounded md:bg-transparent  md:p-0 dark:text-black"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="/#Features"
                className="block py-2 px-3 text-black hover:text-primary rounded md:bg-transparent  md:p-0 dark:text-black"
              >
                Features
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
