import React from "react";
import tikTok from "../public/images/tik-tok.png";
import patreon from "../public/images/patreon.png";

const SupportUs = () => {
  const iconStyles = {
    height: "80px",
    width: "80px",
  };
  return (
    <div
    className=" dot-border-yellow"
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center",
        marginTop: "200px",
        gap: "50px",
        marginBottom: "100px",
        
      }}
    >
      <h1>Support Us</h1>
      <div style={{ display: "flex", justifyContent: "center", gap: "40px" }}>
        <img src={tikTok.src} style={iconStyles} />
        <img src={patreon.src} style={iconStyles} />
      </div>
    </div>
  );
};

export default SupportUs;
