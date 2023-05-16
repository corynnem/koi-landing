import React from "react";
import letterO from "../public/images/letters/o4.jpg";
import letterU from "../public/images/letters/U5.png";
import letterR from "../public/images/letters/r3.jpg";
import letterT from "../public/images/letters/T6.png";
import letterE from "../public/images/letters/E6.png";
import letterA from "../public/images/letters/A4.png";
import letterM from "../public/images/letters/m5.jpg";
import FlipCards from "components/FlipCards/FlipCards";

const OurTeam = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "0px",
          flexDirection: "column",
          textAlign: "center",
          width: "80vw",
        }}
      >
        <div className="border-red">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "40px",
            }}
          >
            <div>
              <img src={letterO.src} className=" outline large" />
              <img src={letterU.src} className=" outline large" />
              <img src={letterR.src} className=" outline large" />
            </div>

            <div>
              <img src={letterT.src} className=" outline large" />
              <img src={letterE.src} className=" outline large" />
              <img src={letterA.src} className=" outline large" />
              <img src={letterM.src} className=" outline large" />
            </div>
          </div>
        </div>

        <FlipCards />
      </div>
    </div>
  );
};

export default OurTeam;
