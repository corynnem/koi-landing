import React, { useEffect } from "react";
import ocean from "../public/images/waterCollage.jpg";
// import $ from "jquery";
// let ripples = import("jquery.ripples");
import Slogan from "./Slogan";
import dynamic from "next/dynamic";

const Welcome = () => {
  // useEffect(() => {
  //   $(".ripples").ripples({
  //     resolution: 600,
  //     dropRadius: 27,
  //     perturbance: 0.05,
  //   });
  // }, []);

  const renderRipples = async () => {
    const $ = await import("jquery");
    await import("expose-loader?exposes=$!jquery");
    const ripples = await import("jquery.ripples");

    if (typeof window !== "undefined") {
      const $ = require("jquery");
      require("jquery.ripples");

      // Initialize ripples effect
      $(".ripples").ripples({
        resolution: 600,
        dropRadius: 27,
        perturbance: 0.05,
      });
    }
  };

  const Ripples = Promise.resolve(
    dynamic(() => renderRipples(), { ssr: false })
  );
  Ripples.then(renderRipples);

  // Moved background style to Slogan so slogan component wouldn't cover the ripple effect
  return <Slogan />;
};

export default Welcome;
