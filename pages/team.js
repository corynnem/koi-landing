import React, { useEffect } from "react";
import letterO from "../public/images/letters/o4.jpg";
import letterU from "../public/images/letters/U5.png";
import letterR from "../public/images/letters/r3.jpg";
import letterT from "../public/images/letters/T6.png";
import letterE from "../public/images/letters/E6.png";
import letterA from "../public/images/letters/A4.png";
import letterM from "../public/images/letters/m5.jpg";
import Navbar from "components/Navbar";
import FlipCards from "components/FlipCards/FlipCards";
import { letterJumble } from "components/custom";
import SupportUs from "components/SupportUs";

const OurTeamPage = () => {
  useEffect(() => {
    letterJumble();
  }, []);
  return (
    <div
      style={{
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        minWidth: "354px",
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflowY: "scroll",
      }}
    >
      <Navbar />

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
            marginTop: "100px",
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
                <img
                  src={letterO.src}
                  className=" outline large"
                  alt="Letter O"
                />
                <img
                  src={letterU.src}
                  className=" outline large"
                  alt="Letter U"
                />
                <img
                  src={letterR.src}
                  className=" outline large"
                  alt="Letter R"
                />
              </div>

              <div>
                <img
                  src={letterT.src}
                  className=" outline large"
                  alt="Letter T"
                />
                <img
                  src={letterE.src}
                  className=" outline large"
                  alt="Letter E"
                />
                <img
                  src={letterA.src}
                  className=" outline large"
                  alt="Letter A"
                />
                <img
                  src={letterM.src}
                  className=" outline large"
                  alt="Letter M"
                />
              </div>
            </div>
          </div>

          <FlipCards />
        </div>
      </div>
      <SupportUs />
    </div>
  );
};

export default OurTeamPage;
