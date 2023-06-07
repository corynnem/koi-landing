import React from "react";
import Navbar from "components/Navbar";
import gogo from "../public/images/go-logo-black.png";
import patreon from "../public/images/patreon.png";
import develop from "../public/images/develop.png";
import ads from "../public/images/billboard.png";
import Image from "next/image";

const SupportUsPage = () => {
  return (
    <div>
      <Navbar />
      <div className="nav-spacer"></div>

      <center>
        <div className="card-support">
          <img
            src={develop.src}
            className="dev-card-image "
            alt="computer with the koi logo on screen"
          />
          <div>
            <div className="card-support-heading px-10">
              <h1>Support our Development Efforts</h1>
            </div>
            <a href="https://www.patreon.com/Koi_dating">
            <div className="bottom-button yel-back">
              <img
                src={patreon.src}
                className="sup-patreaon"
                alt="patreon logo"
              />
              <p className="flex-y-center">On Patreon</p>
            </div>
            </a>
          </div>
        </div>
      </center>

      <center>
        <div className="card-support top-gap">
        
          <img
            src={ads.src}
            className="ads-card-image "
            alt="billboard with koi logo"
          />
          <div className="card-support-heading">
            <h1>Support our future advertising costs</h1>
          </div>
          
          <div className="bottom-button orange-back">
            <img src={gogo.src} className="sup-patreaon" alt="indiegogo logo" />
            <p className="flex-y-center">On Indie-GoGo</p>
          </div>
          <p className="warningtext">-Coming soon-</p>
        </div>
      </center>
      <div className="nav-spacer"></div>
    </div>
  );
};

export default SupportUsPage;
