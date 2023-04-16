import React, { useEffect, useState } from "react";
import Image from "next/image";
import flower from "../public/images/flower.png";

const Flower = () => {
  return (
    <div
      className="dot-border-red"
      style={{
        width: "fit-content",
        position: "absolute",
        left: "73%",
        top: "79%",
        transform: "translate(-50%, -50%)",
        zIndex: "1",
      }}
    >
      <Image
        src={flower}
        alt="flowers"
        style={{
          width: "33vh",
          height: "auto",
          transform: "rotate(0deg)",
        }}
      />
    </div>
  );
};

export default Flower;
