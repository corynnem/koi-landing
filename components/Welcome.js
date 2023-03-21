import React, { useEffect } from "react";
import koi from "../public/images/koi.jpeg";
import logo from "../public/images/logo.png";
import $ from "jquery";
let ripples = import("jquery.ripples");

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
      <h1
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
      </h1>
      <div
        id="ripples"
        style={{
          width: "100vw",
          height: "50vw",
          position: "relative",
          marginTop: "-225px",
          backgroundImage: `url(${koi.src})`,
        }}
      ></div>
    </div>
  );
};

export default Welcome;
