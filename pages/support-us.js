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
        <img src={develop.src} className="dev-card-image " />
          <div>
            
          <div className="card-support-heading px-10">
          <h1 
          >Support our Development Efforts
          </h1>
          </div>
          

          <div className="bottom-button yel-back">
            
          <img src={patreon.src} className="sup-patreaon" />
          <p className="flex-y-center">On Patreon</p>
          </div>
          </div>
        </div>
      </center>

      <center>
      
      <div className="card-support top-gap">
      <img src={ads.src} className="ads-card-image " />
        <div className="card-support-heading">
        <h1 
        >Support our future advertising costs</h1>
        </div>
        

        <div className="bottom-button orange-back">
        <img src={gogo.src} className="sup-patreaon" />
          <p className="flex-y-center">On Indie-GoGo</p>
        </div>
      </div>
    </center>
    <div className="nav-spacer"></div>
    </div>
  );
};

export default SupportUsPage;
