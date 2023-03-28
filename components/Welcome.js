import React, { useEffect } from "react";
import ocean from "../public/images/waterCollage.jpg";
import $ from "jquery";
let ripples = import("jquery.ripples");
import Slogan from "./Slogan";

const Welcome = () => {
  useEffect(() => {
    $(".ripples").ripples({
      resolution: 600,
      dropRadius: 27,
      perturbance: 0.05,
    });
  }, []);

  // Moved background style to Slogan so slogan component wouldn't cover the ripple effect
  return <Slogan />;
};

export default Welcome;
