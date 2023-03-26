import React, { useEffect } from "react";
import logo from "../public/images/logo.png";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  useEffect(() => {
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
        {/* <img src={logo.src} alt="Logo Image" /> */}
        <h1
          style={{
            fontSize: "60px",
            height: "60px",
            position: "relative",
            top: 10,
            zIndex: 1000,
            color: "white",
            marginLeft: "50px",
          }}
        >
          K
          <img
            src={logo.src}
            style={{
              //   width: "80px",
              marginBottom: "-10px",
              //   position: "relative",
              //   zIndex: 1000,
            }}
          />
          i
        </h1>
      </div>
      <div className="hamburger">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      <ul className="nav-links">
        <li>
          <a onClick={() => router.push("/home")}>Home</a>
        </li>
        <li>
          <a onClick={() => router.push("/home")}>The Project</a>
        </li>
        <li>
          <a onClick={() => router.push("/home")}>Our Team</a>
        </li>
        <li>
          <a onClick={() => router.push("/home")}>Support</a>
        </li>
        <li>
          <a onClick={() => router.push("/home")}>Contact Us</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
