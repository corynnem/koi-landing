import React from "react";
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

const Slogan = () => {
  const largeStyle = {
    height: "70px",
  };

  const mediumStyle = {
    height: "60px",
    marginTop: "10px",
  };

  const smallStyle = {
    height: "50px",
    marginTop: "20px",
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        position: "absolute",
        width: "100vw",
        top: "30%",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
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
          <img src={UpperA.src} className="large" />
          <img src={LowerN.src} className="medium" />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
          }}
        >
          <img src={LowerA.src} className="medium" />
          <img src={LowerP.src} className="medium" />
          <img src={LowerP2.src} className="medium" />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
          }}
        >
          <img src={UpperT.src} className="medium" />
          <img src={LowerO.src} className="small" />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
          }}
        >
          <img src={UpperF.src} className="medium" />
          <img src={LowerI.src} className="medium" />
          <img src={LowerN.src} className="medium" />
          <img src={LowerD.src} className="medium" />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
          }}
        >
          <img src={UpperL.src} className="medium" />
          <img src={LowerO.src} className="small" />
          <img src={LowerV.src} className="medium" />
          <img src={UpperE.src} className="small" />
        </div>
      </div>
      <br />
      <br />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
          }}
        >
          <img src={UpperS.src} className="medium" />
          <img src={LowerH.src} className="medium" />
          <img src={LowerO.src} className="small" />
          <img src={UpperU.src} className="medium" />
          <img src={LowerL.src} className="medium" />
          <img src={LowerD.src} className="medium" />
          <img src={LowerN.src} className="medium" />
          <img src={LowerT.src} className="medium" />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
          }}
        >
          <img src={UpperL.src} className="medium" />
          <img src={UpperE.src} className="small" />
          <img src={LowerA.src} className="medium" />
          <img src={LowerD.src} className="medium" />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
          }}
        >
          <img src={UpperY.src} className="medium" />
          <img src={UpperO.src} className="medium" />
          <img src={UpperU.src} className="medium" />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
          }}
        >
          <img src={UpperO.src} className="medium" />
          <img src={LowerN.src} className="medium" />
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}></div>
      <div style={{ display: "flex", flexDirection: "row" }}></div>
    </div>
  );
};

export default Slogan;
