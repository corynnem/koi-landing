import React from "react";
import tikTok from "../public/images/tik-tok.png";
import patreon from "../public/images/patreon.png";
import bubbleWrap from "../public/images/bubblewrap.jpg";
import gogo from "../public/images/go-logo-black.png";

const SupportUs = () => {
  const iconStyles = {
    height: "80px",
    width: "80px",
  };
  return (
    <div
      className=" dot-border-yellow"
      style={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center",
        marginTop: "200px",
        paddingTop: "50px",
        paddingBottom: "100px",
        gap: "50px",
        marginBottom: "100px",
        backgroundImage: ` url(${bubbleWrap.src})`,
        zIndex: "5",
      }}
    >
      <h1>Support Us</h1>
      <div style={{ display: "flex", justifyContent: "center", gap: "40px" }}>
        {/* <img src={gogo.src} style={iconStyles} alt="Indie go go logo" /> */}
        <a href="https://www.patreon.com/Koi_dating">
        <img src={patreon.src} style={iconStyles} alt="Patreon logo" />
        </a>
      </div>
    </div>
  );
};

export default SupportUs;
