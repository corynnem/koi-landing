import React, { useEffect } from "react";
import Slogan from "./Slogan";
import dynamic from "next/dynamic";

const Welcome = () => {
  // const renderRipples = async () => {
  //   const $ = await import("jquery");
  //   await import("expose-loader?exposes=$!jquery");
  //   const ripples = await import("jquery.ripples");

  //   if (typeof window !== "undefined") {
  //     const $ = require("jquery");
  //     require("jquery.ripples");

  //     // Initialize ripples effect
  //     $(".ripples").ripples({
  //       resolution: 600,
  //       dropRadius: 27,
  //       perturbance: 0.05,
  //     });
  //   }
  // };

  // const Ripples = Promise.resolve(
  //   dynamic(() => renderRipples(), { ssr: false })
  // );
  // Ripples.then(renderRipples);

  // Moved background style to Slogan so slogan component wouldn't cover the ripple effect
  return <Slogan />;
};

export default Welcome;
