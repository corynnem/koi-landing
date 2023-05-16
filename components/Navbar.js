import React, { useEffect, useState } from "react";
import logo from "../public/images/logo.png";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const [width, setWidth] = useState(0);
  useEffect(() => {
    setWidth(window.innerWidth);

    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    const links = document.querySelectorAll(".nav-links li");

    hamburger.addEventListener("click", () => {
      //Animate Links
      navLinks.classList.toggle("open");
      links.forEach((link) => {
        link.classList.toggle("fade");
      });

      //Hamburger Animation
      hamburger.classList.toggle("toggle");
    });
  }, []);

  //All routing is currently non function - coming in next PR
  return (
    <nav>
      <div className="logo">
        {/* {width > 700 && ( */}
          <h1
            style={{
              fontSize: "60px",
              height: "60px",
              position: "relative",
              top: 10,
              zIndex: 1000,
              color: "white",
              marginLeft: "10px",
            }}
          >
            K
            <img
              src={logo.src}
              style={{
                marginBottom: "-10px",
              }}
            />
            i
          </h1>
        {/* )} */}
      </div>
      <div className="hamburger">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      <ul className="nav-links">
        <li>
          <a onClick={() => router.push("/")}>Home</a>
        </li>
        <li>
          <a onClick={() => router.push("/about")}>The Project</a>
        </li>
        <li>
          <a onClick={() => router.push("/team")}>Our Team</a>
        </li>
        <li>
          <a onClick={() => router.push("/support-us")}>Support Us</a>
        </li>
        <li>
          <a onClick={() => router.push("/contact-us")}>Contact Us</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
