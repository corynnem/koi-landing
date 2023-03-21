import React, { useEffect } from "react";
import ocean from "../public/images/waterCollage.jpg";
import logo from "../public/images/logo.png";
import $ from "jquery";
let ripples = import("jquery.ripples");
import Slogan from "./Slogan";

const Welcome = () => {
  useEffect(() => {
    $("#ripples").ripples({
      resolution: 600,
      dropRadius: 27,
      perturbance: 0.05,
    });
  }, []);

  return (
    <div>
      {/* <h1
        style={{
          fontSize: "80px",
          height: "80px",
          position: "relative",
          top: -30,
          zIndex: 1000,
          color: "white",
          marginLeft: "50px",
        }}
      >
        K
        <img
          src={logo.src}
          style={{
            width: "80px",
            marginBottom: "-10px",
            position: "relative",
            zIndex: 1000,
          }}
        />
        i
      </h1> */}

      <div
        id="ripples"
        style={{
          backgroundSize: "cover",
          height: "100vh",
          position: "relative",
          backgroundImage: ` url(${ocean.src})`,
        }}
      >
        <div
          style={{
            backgroundSize: "cover",
            width: "100%",
            height: "100%",
            position: "relative",
            background: "rgba(1, 50, 100, 0.5)",
          }}
        ></div>
      </div>
      <Slogan />
    </div>
  );
};

export default Welcome;
