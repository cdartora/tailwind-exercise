import { useState } from "react";
import logo from "../assets/logo-inverted.png";
import MenuItem from "./MenuItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { List, X } from "@phosphor-icons/react";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <nav className="flex sticky top-0 bg-gradient-to-r from-rose-500 to-pink-500 z-10">
      <div className="flex items-center p-2 gap-2">
        <img src={logo} alt="Logomarca do festival" width="50" />
        <div className="font-bold text-2xl">
          tw:<span className="text-sky-900">mf</span>
        </div>
      </div>
      <div className="block md:hidden ml-auto pr-4 my-auto cursor-pointer transition-all">
        {isMenuOpen ? (
          <>
            <button
              type="button"
              onClick={toggleMenu}
              className="flex  items-center"
            >
              <X size={32} weight="bold" />
            </button>

            <div className="absolute top-[66.84px] bg-gradient-to-r from-rose-500 to-pink-500 w-full right-0">
              <MenuItem label="Home" mobile={true} closeMenu={toggleMenu} />
              <MenuItem
                label="Tickets"
                mobile={true}
                hasSubmenuItems={true}
                closeMenu={toggleMenu}
              />
              <MenuItem label="Lineup" mobile={true} closeMenu={toggleMenu} />
              <MenuItem label="Support" mobile={true} closeMenu={toggleMenu} />
            </div>
          </>
        ) : (
          <button
            type="button"
            onClick={toggleMenu}
            className="flex  items-center"
          >
            <List size={32} weight="bold" />
          </button>
        )}
      </div>
      <div className="hidden md:flex flex-1 items-center justify-end">
        <MenuItem label="Home" />
        <MenuItem label="Tickets" hasSubmenuItems={true} />
        <MenuItem label="Lineup" />
        <MenuItem label="Support" />
      </div>
    </nav>
  );
}

export default NavBar;
