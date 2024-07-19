import logo from "../assets/logo.png";
import { useState } from "react";

function Navbar() {
  const [isMoblieMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMoblieMenuOpen);
  const handleLinkClick = (e, herf) => {
    e.preventDefault();
    const taggetElement = document.querySelector(herf);
    if (taggetElement) {
      const offset = -85;
      const elementPosition = taggetElement.getBoundingClientRect().top;
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
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
