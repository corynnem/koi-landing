import React, { useEffect } from "react";
import Image from "next/image";
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
import koi from "../public/images/fish.gif";
import lily from "../public/images/lilypad.png";
import leaf from "../public/images/Pear_Leaf.png";
import splat from "../public/images/splat.png";
import About from "components/AboutUs";
import MissionStatement from "components/MissionStatement";
import OurTeam from "components/OurTeam";
import SupportUs from "components/SupportUs";
import { letterJumble } from "./custom";
import { useRouter } from "next/router";

const Slogan = () => {
  useEffect(() => {
    letterJumble();
  }, []);
  const router = useRouter();
  return (
    <div
      className="ripples border-purple"
      style={{
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        height: "100vh",
        minWidth: "354px",
        position: "relative",
        // backgroundImage: ` url(${koi.src})`,
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
          overflowY: "scroll",
        }}
      >
        {/* Start Letters Section */}
        <div
          className="letter-box border-yellow"
          style={{
            display: "flex",
            flexDirection: "column",
            position: "absolute",
            // you can now control the spacing by changing the width prop

            left: "50%",
            top: "16vh",

            transform: "translate(-50%, 0%)",
            zIndex: "10",
          }}
        >
          <div
            className="dot-border-yellow"
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",

              justifyContent: "center",
              columnGap: "10%",
              rowGap: "6vh",
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
              <img src={UpperA.src} className=" outline large" alt="Letter A" />
              <img src={LowerN.src} className=" outline medium" alt="Letter N" />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "10px",
              }}
            >
              <img src={LowerA.src} className=" outline medium" alt="Letter A" />
              <img src={LowerP.src} className=" outline medium" alt="Letter P" />
              <img src={LowerP2.src} className=" outline medium" alt="Letter P" />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "10px",
              }}
            >
              <img src={UpperT.src} className=" outline medium" alt="Letter T" />
              <img src={LowerO.src} className=" outline small"  alt="Letter O" />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "10px",
              }}
            >
              <img src={UpperF.src} className=" outline medium" alt="Letter F" />
              <img src={LowerI.src} className=" outline medium" alt="Letter I" />
              <img src={LowerN.src} className=" outline medium" alt="Letter N" />
              <img src={LowerD.src} className=" outline medium" alt="Letter D" />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "10px",
              }}
            >
              <img src={UpperL.src} className=" outline medium" alt="Letter L" />
              <img src={LowerO.src} className=" outline small"  alt="Letter O"/>
              <img src={LowerV.src} className=" outline medium" alt="Letter V"/>
              <img src={UpperE.src} className=" outline small"  alt="Letter E"/>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "10px",
              }}
            >
              <img src={UpperS.src} className=" outline medium" alt="Letter S" />
              <img src={LowerH.src} className=" outline medium" alt="Letter H" />
              <img src={LowerO.src} className=" outline small"  alt="Letter O" />
              <img src={UpperU.src} className=" outline medium" alt="Letter U" />
              <img src={LowerL.src} className=" outline medium" alt="Letter L" />
              <img src={LowerD.src} className=" outline medium" alt="Letter D" />
              <img src={LowerN.src} className=" outline medium" alt="Letter N" />
              <img src={LowerT.src} className=" outline medium" alt="Letter T" />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "10px",
              }}
            >
              <img src={UpperL.src} className=" outline medium" alt="Letter L" />
              <img src={UpperE.src} className=" outline small"  alt="Letter E" />
              <img src={LowerA.src} className=" outline medium" alt="Letter A" />
              <img src={LowerD.src} className=" outline medium" alt="Letter D" />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "10px",
              }}
            >
              <img src={UpperY.src} className=" outline medium" alt="Letter Y" />
              <img src={UpperO.src} className=" outline medium" alt="Letter O" />
              <img src={UpperU.src} className=" outline medium" alt="Letter U" />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "10px",
              }}
            >
              <img src={UpperO.src} className=" outline medium" alt="Letter O" />
              <img src={LowerN.src} className=" outline medium" alt="Letter N" />
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "row" }}></div>
          <div style={{ display: "flex", flexDirection: "row" }}></div>
          
          <a onClick={() => router.push("/support-us")}>
          <div
            className="border-blue"
            style={{
              paddingTop: "30px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              transform: "rotate(5deg)",
            }}
          >
            <Image
              alt="splattered background"
              src={splat}
              style={{
                width: "50vh",
                height: "auto",
                cursor: "pointer",
              }}
              className="splat"
              priority
            />
            <p
              style={{
                position: "absolute",
                paddingTop: "5px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                pointerEvents: "none",
                fontSize: "4vh",
              }}
            >
              SUPPORT THE <br></br> MOVEMENT!
            </p>
          </div>
          </a>

        </div>
        {/* End Letters Section */}

        {/*       
      <Flower />
      
      <FlowerFrog /> */}

        {/* Start lilly pad */}
        <div
          className="border-green"
          style={{
            marginTop: "10vh",
            height: "90vh",
          }}
        >
          <div
            className="dot-border-green"
            style={{
              width: "fit-content",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <Image src={lily} className="lillyPad" alt="lilly pad" priority />
            {/* <Image src={leaf} className="a-leaf" alt="lilly pad" priority /> */}
          </div>
        </div>

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
