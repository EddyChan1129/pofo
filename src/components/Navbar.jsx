import logo from "../assets/logo.png";
import { useState } from "react";
import { NAVIGATION_LINKS } from "../constants/index";
import { FaTimes, FaBars } from "react-icons/fa";

function Navbar() {
  const [isMoblieMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMoblieMenuOpen);
  const handleLinkClick = (e, herf) => {
    e.preventDefault();
    const targetElement = document.querySelector(herf);
    if (targetElement) {
      const offset = -85;
      const elementPosition = targetElement .getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY + offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };
  return (
    <div>
      <nav className="fixed left-0 right-0 top-4 z-50">
        {/* Navbar  Desktop*/}
        <div className="mx-auto hidden max-w-2xl items-center justify-center rounded-lg bg-black/20 py-3 backdrop-blur-lg lg:flex">
          <div className="flex justify-between gap-6">
            <a href="#">
              <img src={logo} width={90} alt="logo" />
            </a>
          </div>
          <div>
            <ul className="flex items-center  gap-4">
              {NAVIGATION_LINKS.map((items, index) => {
                return (
                  <li key={index}>
                    <a
                      className="text-sm hover:text-yellow-500"
                      href={items.href}
                      onClick={(e) => handleLinkClick(e, items.href)}
                    >
                      {items.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        {/* Navbar Mobile */}
        <div className="rounded-lg backdrop-blur-md lg:hidden">
          <div className="flex items-center justify-between">
            <div>
              <a href="#">
                <img src={logo} width={90} alt="logo" className="m-2" />
              </a>
            </div>
            <div className="flex items-center">
              <button
                className="focus:outline-none lg:hidden"
                onClick={toggleMobileMenu}
              >
                {isMoblieMenuOpen ? (
                  <FaTimes className="m-2 h-6 w-5" />
                ) : (
                  <FaBars className="m-2 h-6 w-5" />
                )}
              </button>
            </div>
          </div>
          {isMoblieMenuOpen && (
            <ul className="ml-4 mt-4 flex flex-col gap-4 backdrop-blur-md">
              {NAVIGATION_LINKS.map((items, index) => {
                return (
                  <li key={index}>
                    <a
                      className="block w-full text-xl font-semibold"
                      href={items.href}
                      onClick={(e) => handleLinkClick(e, items.href)}
                    >
                      {items.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
