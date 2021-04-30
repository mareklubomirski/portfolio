import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.css";

const NavBar = () => {
  const [openNav, setOpenNav] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);

  const trackScreenWidth = () => {
    const width = window.innerWidth;
    setScreenWidth(width);
    if (width > 800) {
      setOpenNav(true);
    }
  };

  const handleClose = () => {
    if (screenWidth < 800) {
      setOpenNav(false);
    }
  };

  useEffect(() => {
    trackScreenWidth();
    window.addEventListener("resize", trackScreenWidth);
    return () => window.removeEventListener("resize", trackScreenWidth);
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-wrapper">
        <div className="logo">
          <Link to="/">
            <img src={`${process.env.PUBLIC_URL}/buns.png`} alt="brand" />
          </Link>
        </div>
        <div className="list-wrapper">
          <img
            src={`${process.env.PUBLIC_URL}/menu.png`}
            alt="menu"
            style={{ opacity: !openNav ? 1 : 0 }}
            onClick={() => {
              setOpenNav(!openNav);
            }}
          />
          <img
            src={`${process.env.PUBLIC_URL}/close.png`}
            alt="close"
            style={{ opacity: openNav ? 1 : 0 }}
            onClick={() => {
              setOpenNav(!openNav);
            }}
          />

          <ul style={{ left: openNav ? "0" : "-100vw" }}>
            <li>
              <Link onClick={handleClose} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link onClick={handleClose} to="/about">
                About
              </Link>
            </li>
            <li>
              <Link onClick={handleClose} to="/projects">
                Projects
              </Link>
            </li>
            <li>
              <Link onClick={handleClose} to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
