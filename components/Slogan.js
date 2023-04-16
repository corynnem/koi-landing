import React, { useEffect } from "react";
import Image from 'next/image'
import LowerA from "../public/images/letters/LowerA.png";
import LowerN from "../public/images/letters/LowerN.png";
import UpperA from "../public/images/letters/UpperA.png";
import LowerP from "../public/images/letters/LowerP.png";
import LowerP2 from "../public/images/letters/LowerP2.png";
import UpperT from "../public/images/letters/UpperT.png";
import LowerO from "../public/images/letters/LowerO.png";
import UpperF from "../public/images/letters/UpperF.png";
import LowerI from "../public/images/letters/LowerI.png";
import LowerD from "../public/images/letters/LowerD.png";
import UpperL from "../public/images/letters/UpperL.png";
import LowerV from "../public/images/letters/LowerV.png";
import UpperE from "../public/images/letters/UpperE.png";
import UpperS from "../public/images/letters/UpperS.png";
import LowerH from "../public/images/letters/LowerH.png";
import UpperO from "../public/images/letters/UpperO.png";
import UpperU from "../public/images/letters/UpperU.png";
import LowerL from "../public/images/letters/LowerL.png";
import LowerT from "../public/images/letters/LowerT.png";
import UpperY from "../public/images/letters/UpperY.png";
import koi from "../public/images/underwater_rocks.jpg";
import lily from "../public/images/lilypad.png";
import support from "../public/images/support_button.png";
import About from "components/AboutUs";
import MissionStatement from "components/MissionStatement";
import OurTeam from "components/OurTeam";
import SupportUs from "components/SupportUs";
import { letterJumble } from "./custom";
import $ from "jquery";

const Slogan = () => {
  useEffect(() => {
    letterJumble();
  }, []);

  return (
    
    <div
      className="ripples border-purple"
      style={{
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        height: "100vh",
        minWidth: "354px",
        position: "relative",
        backgroundImage: ` url(${koi.src})`,
        
        
        
      }}
    >



{/* Start collage Section */}
      <div
      className="dot-border-blue"
      style={{
        position: "relative",
        top: "0",
        width: "100vw",
        height: "100vh",
        overflowY: "scroll"
      }}>

      {/* Start Letters Section */}
      <div
      className="border-yellow"
        style={{
          display: "flex",
          flexDirection: "column",
          position: "absolute",
          // you can now control the spacing by changing the width prop
          width: "78vh",
          left: "50%",
          top: "16vh",
          gap: "10%",
          
          transform: 'translate(-50%, 0%)',
          zIndex: '10'
        }}
      >
        <div
        className="dot-border-yellow"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            gap: "10%",
          }}
        >
          {" "}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "10px",
            }}
          >
            <img src={UpperA.src} className=" outline large" />
            <img src={LowerN.src} className=" outline medium" />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "10px",
            }}
          >
            <img src={LowerA.src} className=" outline medium" />
            <img src={LowerP.src} className=" outline medium" />
            <img src={LowerP2.src} className=" outline medium" />
          </div>
        </div>
        <span className="break-space" ></span>
        <div
        className="dot-border-yellow"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            gap: "10%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "10px",
            }}
          >
            <img src={UpperT.src} className=" outline medium" />
            <img src={LowerO.src} className=" outline small" />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "10px",
            }}
          >
            <img src={UpperF.src} className=" outline medium" />
            <img src={LowerI.src} className=" outline medium" />
            <img src={LowerN.src} className=" outline medium" />
            <img src={LowerD.src} className=" outline medium" />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "10px",
            }}
          >
            <img src={UpperL.src} className=" outline medium" />
            <img src={LowerO.src} className=" outline small" />
            <img src={LowerV.src} className=" outline medium" />
            <img src={UpperE.src} className=" outline small" />
          </div>
        </div>
        <span className="break-space" ></span>
        <div
        className="dot-border-yellow"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            gap: "10%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "10px",
            }}
          >
            <img src={UpperS.src} className=" outline medium" />
            <img src={LowerH.src} className=" outline medium" />
            <img src={LowerO.src} className=" outline small" />
            <img src={UpperU.src} className=" outline medium" />
            <img src={LowerL.src} className=" outline medium" />
            <img src={LowerD.src} className=" outline medium" />
            <img src={LowerN.src} className=" outline medium" />
            <img src={LowerT.src} className=" outline medium" />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "10px",
            }}
          >
            <img src={UpperL.src} className=" outline medium" />
            <img src={UpperE.src} className=" outline small" />
            <img src={LowerA.src} className=" outline medium" />
            <img src={LowerD.src} className=" outline medium" />
          </div>
        </div>
        <span className="break-space" ></span>
        <div
        className="dot-border-yellow"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            gap: "10%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "10px",
            }}
          >
            <img src={UpperY.src} className=" outline medium" />
            <img src={UpperO.src} className=" outline medium" />
            <img src={UpperU.src} className=" outline medium" />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "10px",
            }}
          >
            <img src={UpperO.src} className=" outline medium" />
            <img src={LowerN.src} className=" outline medium" />
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}></div>
        <div style={{ display: "flex", flexDirection: "row" }}></div>
      </div>
      {/* End Letters Section */}

      
      {/* Start Red Button */}
      {/* <div
      className="dot-border-red"
            style={{
              width: 'fit-content',
              position: "absolute",
              left: '53%',
              top: '75%', 
              transform: 'translate(-50%, -50%)',
              zIndex: '1'

            }}>
            <Image src={support} 
            style={
              {
                width: '200px',
                height: '200px',
                transform: 'rotate(-20deg)'
              }} />
      </div> */}
      {/* End Red Button */}


        {/* Start lilly pad */}
        <div
        className="border-green"
         style={{
         marginTop: "10vh",
         // position: "absolute",
         // left: '50%',
         // top: '53%', 
         height: "90vh",
         // transform: 'translate(-50%, -50%)',
         // zIndex: '0'

       }}>
            <div
            className="dot-border-green"
            style={{
               width: 'fit-content',
              // position: "absolute",
              // left: '50%',
              // top: '53%', 
              // border: '4px dotted green',
              // transform: 'translate(-50%, -50%)',
              // zIndex: '0',
              marginLeft: "auto",
              marginRight: "auto",
              

            }}>
            <Image src={lily} 
            style={
              {
                width: '95vh',
                height: 'auto',
              }} />
            </div>
        </div>
        {/* End lilly pad */}
      
        <About />
        <MissionStatement />
        <OurTeam />
        <SupportUs />
      </div>
{/* End collage Section */}

        
        
        
        
</div>

  );
};

export default Slogan;
