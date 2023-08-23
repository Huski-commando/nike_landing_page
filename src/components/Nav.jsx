import { headerLogo } from "../assets/images/";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleHandler = () => {
    return setIsMenuOpen(!isMenuOpen);
  };

  const hideMenu = () => {
    return setIsMenuOpen(false);
  };

  return (
    <header className="padding-x w-full py-8 absolute z-10 ">
      <nav className="flex justify-between items-center max-container ">
        <a href="/">
          <img src={headerLogo} alt="logo" width={130} height={29} />
        </a>
        <ul
          className={`flex-1  ${
            isMenuOpen ? "max-lg:translate-y-0" : "max-lg:translate-y-[-200%]"
          } duration-500 lg:gap-16 flex flex-col bg-slate-200/[0.6]   rounded-tl-xl rounded-br-xl lg:bg-transparent py-3 px-3
          lg:relative lg:top-auto translate-x-0 absolute right-5 top-[2rem]  
          lg:flex-row lg:items-center lg:justify-center gap-4  `}
        >
          {navLinks.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray "
                onClick={hideMenu}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div
          className={`lg:mr-8 hidden lg:flex lg:gap-2 font-semibold py-3 px-[0.95rem] 
            lg:flex-row lg:items-center lg:justify-center `}
        >
          <a href="/">Sign In</a>
          <span className="hidden lg:block">/</span>
          <a href="/">Explore Now</a>
        </div>

        {isMenuOpen ? (
          <FaTimes
            className={`cursor-pointer absolute right-8 top-10 lg:hidden text-slate-400 text-xl`}
            onClick={toggleHandler}
          />
        ) : (
          <div onClick={() => toggleHandler()}>
            <img
              src={hamburger}
              alt="Hamburger"
              width={25}
              height={25}
              className="hidden max-lg:block cursor-pointer"
            />
          </div>
        )}
      </nav>
    </header>
  );
};

export default Nav;
