import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logoDark from "../assets/images/logo-dark.png";
import logoLight from "../assets/images/logo-light.png";
import { Link as Link1 } from "react-scroll";

export default function Navbar() {
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
      className={`navbar ${scroll ? "is-sticky bg-black text-white" : ""}`}
      id="navbar"
    >
      <div className="container relative flex flex-wrap items-center justify-between">
        <Link className="navbar-brand md:me-8" to="/">
          <img
            src={scroll ? logoLight : logoDark}
            className={scroll ? "hidden" : "inline-block dark:hidden"}
            alt=""
          />
          <img
            src={logoLight}
            className={scroll ? "inline-block" : "hidden dark:inline-block"}
            alt=""
          />
        </Link>

        <div
          className={`navigation lg_992:order-1 lg_992:flex ms-auto ${
            manu ? "" : "hidden"
          }`}
          id="menu-collapse"
        >
          <ul className="navbar-nav" id="navbar-navlist">
            <li className="nav-item ms-0">
              <Link1
                className={`nav-link ${scroll ? "text-white" : ""}`}
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
