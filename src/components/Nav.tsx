import { useState } from "react";
import { links } from "../data/links";
import { IoMenu } from "react-icons/io5";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className={`navbar ${menuOpen ? "open" : ""}`}>
      <a href="/" className="logo">
        <img src="/images/logo.svg" alt="logo" />
      </a>

      {/* mobile navbar */}
      <div className="menu-icon" onClick={toggleMenu}>
        <IoMenu size={35} />
      </div>

      {/* nav items */}
      <ul className={`nav-links ${menuOpen ? "visible" : ""}`}>
        {links.map((link) => (
          <li key={link.href} className="nav-item">
            <a href={link.href} className="nav-link">
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
