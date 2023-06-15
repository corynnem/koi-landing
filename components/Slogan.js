import React, { useEffect } from "react";
import Image from "next/image";
import LowerA from "../public/images/letters/A3.png";
import LowerN from "../public/images/letters/N5.png";
import UpperA from "../public/images/letters/A6.png";
import LowerP from "../public/images/letters/P4.png";
import LowerP2 from "../public/images/letters/P6.png";
import UpperT from "../public/images/letters/T3.png";
import redLowerO from "../public/images/letters/o4red.jpg";
import LowerO from "../public/images/letters/o3.jpg";
import UpperF from "../public/images/letters/F5.png";
import LowerI from "../public/images/letters/I5.png";
import LowerD from "../public/images/letters/D1.png";
import redUpperL from "../public/images/letters/L2red.jpg";
import UpperL from "../public/images/letters/L3.jpg";
import LowerV from "../public/images/letters/v5.jpg";
import redUpperE from "../public/images/letters/E3red.png";
import UpperE from "../public/images/letters/E4.png";
import UpperS from "../public/images/letters/UpperS.png";
import LowerH from "../public/images/letters/LowerH.png";
import UpperO from "../public/images/letters/UpperO.png";
import UpperU from "../public/images/letters/UpperU.png";
import LowerL from "../public/images/letters/LowerL.png";
import LowerT from "../public/images/letters/LowerT.png";
import UpperY from "../public/images/letters/UpperY.png";
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
      className=" border-purple"
      style={{
        height: "100vh",
        width: "100vw",
        position: "relative",
        overflowX: "hidden",
        overflowY: "hidden",
        backgroundColor: "#266382",
      }}
    >
      {/* start circles  */}
      <div id="blue-circle" className="top-circle"></div>
      <div id="blue-ripple" className="ripple-for-circle">
        <div id="blue-mask" className="ripple-mask"></div>
      </div>

      <div id="orange-circle" className="top-circle"></div>
      <div id="orange-ripple" className="ripple-for-circle">
        <div id="orange-mask" className="ripple-mask"></div>
      </div>

      <div id="yellow-circle" className="top-circle">
        <div id="yellow-circle-ring-mask" className=""></div>
      </div>
      <div id="yellow-ripple" className="ripple-for-circle">
        <div id="yellow-mask" className="ripple-mask"></div>
      </div>

      {/* end circles */}

      {/* Start collage Section */}
      <div
        className="dot-border-blue"
        style={{
          position: "relative",
          top: "0",
          width: "100vw",
          height: "100vh",
          overflowY: "scroll",
          overflowX: "visible",
        }}
      >
        {/* Start Letters Section */}
        <div
          id="hero-letters"
          className="letter-box "
          style={{
            display: "flex",
            flexDirection: "column",
            position: "absolute",
            paddingTop: "20px",
            paddingBottom: "20px",
            // you can now control the spacing by changing the width prop
            overflowX: "visible",
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
              columnGap: "15%",
              rowGap: "5vh",
            }}
          >
            {" "}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "1px",
              }}
            >
              <img
                src={UpperA.src}
                className=" outline large shaddow3"
                alt="Letter A"
              />
              <img
                src={LowerN.src}
                className=" outline medium shaddow2"
                alt="Letter N"
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "3px",
              }}
            >
              <img
                src={LowerA.src}
                className=" outline medium shaddow3"
                alt="Letter A"
              />
              <img
                src={LowerP.src}
                className=" outline medium"
                alt="Letter P"
              />
              <img
                src={LowerP2.src}
                className=" outline medium shaddow1"
                alt="Letter P"
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "3px",
              }}
            >
              <img
                src={UpperT.src}
                className=" outline medium"
                alt="Letter T"
              />
              <img
                src={LowerO.src}
                className=" outline small shaddow2"
                alt="Letter O"
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "3px",
              }}
            >
              <img
                src={UpperF.src}
                className=" outline medium"
                alt="Letter F"
              />
              <img
                src={LowerI.src}
                className=" outline medium shaddow2"
                alt="Letter I"
              />
              <img
                src={LowerN.src}
                className=" outline medium"
                alt="Letter N"
              />
              <img
                src={LowerD.src}
                className=" outline medium shaddow3"
                alt="Letter D"
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "3px",
              }}
            >
              <img
                src={redUpperL.src}
                className=" outline medium shaddow3"
                alt="Letter L"
              />
              <img
                src={redLowerO.src}
                className=" outline small shaddow1"
                alt="Letter O"
              />
              <img
                src={LowerV.src}
                className=" outline medium shaddow3"
                alt="Letter V"
              />
              <img
                src={redUpperE.src}
                className=" outline small shaddow1"
                alt="Letter E"
              />
            </div>
            {/* start support card */}
            <div className="support_card ">
              <a onClick={() => router.push("/support-us")}>
                <div
                  className="border-blue btn-1 shaddow3"
                  style={{
                    padding: "10px",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                  }}
                >
                  <p
                    style={{
                      paddingTop: "5px",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      pointerEvents: "none",
                      fontSize: "25px",
                      color: "white",
                      fontFamily: "sans-serif",
                      fontWeight: "600",
                    }}
                  >
                    SUPPORT US!
                  </p>
                </div>
              </a>
            </div>
            {/* end support card */}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "3px",
              }}
            >
              <img
                src={UpperS.src}
                className=" outline medium"
                alt="Letter S"
              />
              <img
                src={LowerH.src}
                className=" outline medium"
                alt="Letter H"
              />
              <img src={LowerO.src} className=" outline small" alt="Letter O" />
              <img
                src={UpperU.src}
                className=" outline medium"
                alt="Letter U"
              />
              <img
                src={LowerL.src}
                className=" outline medium"
                alt="Letter L"
              />
              <img
                src={LowerD.src}
                className=" outline medium"
                alt="Letter D"
              />
              <img
                src={LowerN.src}
                className=" outline medium"
                alt="Letter N"
              />
              <img
                src={LowerT.src}
                className=" outline medium"
                alt="Letter T"
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "3px",
              }}
            >
              <img
                src={UpperL.src}
                className=" outline medium"
                alt="Letter L"
              />
              <img src={UpperE.src} className=" outline small" alt="Letter E" />
              <img
                src={LowerA.src}
                className=" outline medium"
                alt="Letter A"
              />
              <img
                src={LowerD.src}
                className=" outline medium"
                alt="Letter D"
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "3px",
              }}
            >
              <img
                src={UpperY.src}
                className=" outline medium"
                alt="Letter Y"
              />
              <img
                src={UpperO.src}
                className=" outline medium"
                alt="Letter O"
              />
              <img
                src={UpperU.src}
                className=" outline medium"
                alt="Letter U"
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "3px",
              }}
            >
              <img
                src={UpperO.src}
                className=" outline medium"
                alt="Letter O"
              />
              <img
                src={LowerN.src}
                className=" outline medium"
                alt="Letter N"
              />
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "row" }}></div>
          <div style={{ display: "flex", flexDirection: "row" }}></div>
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
            {/* <Image src={lily} className="lillyPad" alt="lilly pad" priority /> */}
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
