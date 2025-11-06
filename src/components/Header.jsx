import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/shared/logo.svg";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="flex items-center justify-between py-6 md:p-0 lg:pt-10">
      <div className="flex items-center pl-6 md:pl-10 xl:pl-16 lg:gap-10 xl:gap-16 w-1/2 lg:w-[calc(50%+16px)] lg:-mr-8">
        <NavLink to="/">
          <img
            src={logo}
            alt="Space Tourism Logo"
            className="size-10 md:size-12"
          />
        </NavLink>
        <span className="hidden lg:flex flex-1 h-px bg-white opacity-25 z-20"></span>
      </div>
      <div className="w-1/2 pr-6 flex justify-end md:hidden">
        <svg
          onClick={() => setMenuOpen(true)}
          className="cursor-pointer"
          aria-label="Open Navigation Menu"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="21"
        >
          <g fill="#D0D6F9" fillRule="evenodd">
            <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" />
          </g>
        </svg>
      </div>
      <nav
        className={`fixed md:static top-0 left-full z-10 w-[68%] h-full md:size-auto pl-8 flex flex-col gap-12 md:flex-row md:justify-end bg-blue-900/15 md:bg-white/5 backdrop-blur-[80px] text-white uppercase md:px-10 xl:px-16 lg:w-[calc(50%+16px)] transition-transform duration-300 md:translate-x-0 ${
          menuOpen ? "-translate-x-full" : "translate-x-0"
        }`}
      >
        <div className="flex justify-end py-8 md:hidden">
          <svg
            onClick={() => setMenuOpen(false)}
            className="mr-6 cursor-pointer"
            aria-label="Close Navigation Menu"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="21"
          >
            <g fill="#D0D6F9" fillRule="evenodd">
              <path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z" />
              <path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z" />
            </g>
          </svg>
        </div>
        <ul className="flex flex-col md:flex-row gap-12 lg:gap-5 xl:gap-12 links">
          <li>
            <NavLink
              to="/"
              className="link md:border-r-0 md:border-b-[3px] md:h-24"
            >
              <span className="font-bold tracking-[2.7px]">00</span>Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/destination"
              className="link md:border-r-0 md:border-b-[3px] md:h-24"
            >
              <span className="font-bold tracking-[2.7px]">01</span>Destination
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/crew"
              className="link md:border-r-0 md:border-b-[3px] md:h-24"
            >
              <span className="font-bold tracking-[2.7px]">02</span>Crew
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/technology"
              className="link md:border-r-0 md:border-b-[3px] md:h-24"
            >
              <span className="font-bold tracking-[2.7px]">03</span>Technology
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
