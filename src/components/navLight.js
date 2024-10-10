import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import logoDark from "../assets/images/logo-dark.png";
// import logoLight from "../assets/images/logo-light.png";
import { Link as Link1 } from "react-scroll";

export default function NavLight() {
  let [scroll, setScroll] = useState(false);
  let [manu, setManu] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
    return () => {
      window.removeEventListener("scroll", () => {
        setScroll(window.scrollY > 50);
      });
    };
  }, []);

  return (
    <nav 
      className={`navbar ${scroll ? "is-sticky bg-[#847112] text-white" : ""}`} 
      id="navbar"
    >
      <div className="container relative flex flex-wrap items-center justify-between">
        <Link className="navbar-brand md:me-8" to="/">
          <span className={scroll ? "hidden" : "inline-block dark:hidden"}>
            <h1 className="text-black font-bold text-2xl l-dark">
              TKM Noorani Nagar
            </h1>
            <h1 className="text-white font-bold text-2xl l-light">
              TKM Noorani Nagar
            </h1>
          </span>
          <span className={scroll ? "inline-block" : "hidden dark:inline-block"}>
            <h1 className="text-white font-bold text-2xl">
              TKM Noorani Nagar
            </h1>
          </span>
        </Link>

        <div
          className={`navigation lg_992:order-1 lg_992:flex ms-auto ${
            manu ? "" : "hidden"
          }`}
          id="menu-collapse"
        >
          <ul className="navbar-nav nav-light sidebar-nav" id="navbar-navlist">
            <li className="nav-item">
              <Link1
                className={`nav-link ms-0 ${scroll ? "text-white" : ""}`}
                to="home"
                smooth={true}
                duration={1000}
                activeClass="active"
                spy={true}
              >
                Home
              </Link1>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}