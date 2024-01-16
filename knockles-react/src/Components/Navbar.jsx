import { useState } from "react";
import Logo from "../static/logo-knockles-1.png";

const Navbar = ({ activeIndex, setActiveIndex }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  function toggleMenu() {
    setMenuOpen((menuOpen) => !menuOpen);
  }
  function handleLinkClick(event, index = 0, isMobileLink = false) {
    event.preventDefault();
    setActiveIndex(index);
    if (!isMobileLink) return;
    if (index === 1) window.scrollTo(0, window.innerHeight - 100);
    else if (index === 2) {
      window.scrollTo(0, window.innerHeight * index - 250);
    } else if (index === 3)
      window.scrollTo(0, window.innerHeight * index + 600);
    else if (index === 4) window.scrollTo(0, window.innerHeight * index + 450);
    else if (index !== 5) window.scrollTo(0, window.innerHeight * index);
    else window.scrollTo(0, document.body.scrollHeight);
    setMenuOpen(false);
  }
  return (
    <nav className="navbarBackground bg-repeat bg-contain flex justify-between items-center border-b-2 border-[#ffffff26] px-4 lg:px-8 xl:px-20">
      <div>
        <a href="#home">
          <img
            src={Logo}
            className="w-[52px]"
            alt="logo"
            onClick={(e) => handleLinkClick(e, 0, true)}
          />
        </a>
      </div>
      <div className="menu_items">
        <a
          href="#home"
          onClick={(e) => handleLinkClick(e, 0)}
          className={`${activeIndex === 0 ? "active" : ""}`}
        >
          Home
        </a>
        <a
          href="#ourstory"
          onClick={(e) => handleLinkClick(e, 1)}
          className={`${activeIndex === 1 ? "active" : ""}`}
        >
          Our Story
        </a>
        <a
          href="#memes"
          onClick={(e) => handleLinkClick(e, 2)}
          className={`${activeIndex === 2 ? "active" : ""}`}
        >
          Memes
        </a>
        <a
          href="#tokenomics"
          onClick={(e) => handleLinkClick(e, 3)}
          className={`${activeIndex === 3 ? "active" : ""}`}
        >
          {/* Tokenomics */}
          Knockmics
        </a>
        <a
          href="#knockle_maps"
          onClick={(e) => handleLinkClick(e, 4)}
          className={`${activeIndex === 4 ? "active" : ""}`}
        >
          Knockles Map
        </a>
        <a
          href="#follow"
          onClick={(e) => handleLinkClick(e, 5)}
          className={`${activeIndex === 5 ? "active" : ""}`}
        >
          Follow Us
        </a>
      </div>
      <button
        type="button"
        className={`menu_btn ${menuOpen ? "active" : ""}`}
        id="menu_btn"
        onClick={toggleMenu}
      >
        {menuOpen ? (
          <div className="font-normal h-9 flex items-center">X</div>
        ) : (
          <img src="/Images/menuIcon.png" alt="" />
        )}
      </button>
      <div className="mob_menu_items">
        <a
          className={`${activeIndex === 0 ? "active" : ""}`}
          href="#home"
          onClick={(e) => handleLinkClick(e, 0, true)}
        >
          Home
        </a>
        <a
          className={`${activeIndex === 1 ? "active" : ""}`}
          href="#ourstory"
          onClick={(e) => handleLinkClick(e, 1, true)}
        >
          Our Story
        </a>
        <a
          className={`${activeIndex === 2 ? "active" : ""}`}
          href="#memes"
          onClick={(e) => handleLinkClick(e, 2, true)}
        >
          Memes
        </a>

        <a
          className={`${activeIndex === 3 ? "active" : ""}`}
          href="#tokenomics"
          onClick={(e) => handleLinkClick(e, 3, true)}
        >
          Tokenomics
        </a>
        <a
          className={`${activeIndex === 4 ? "active" : ""}`}
          href="#knockle_maps"
          onClick={(e) => handleLinkClick(e, 4, true)}
        >
          Knockles Map
        </a>
        <a
          className={`${activeIndex === 5 ? "active" : ""}`}
          href="#follow"
          onClick={(e) => handleLinkClick(e, 5, true)}
        >
          Follow Us
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
