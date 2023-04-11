import React from "react";
import { Paper } from "@mui/material";
import headshot from "../public/images/testImages/headshot.jpg";

const OurTeam = () => {
  const headshotStyles = {
    height: "40vh",
    width: "auto",
  };
  const headshotWrapper = {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  };

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
          marginTop: "100px",
          flexDirection: "column",
          textAlign: "center",
          width: "80vw",
        }}
      >
        <h1>Our Team</h1>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            flexWrap: "wrap",
            marginTop: "100px",
          }}
        >
          <div style={headshotWrapper}>
            <img src={headshot.src} style={headshotStyles} />
            <h3>Ben</h3>
          </div>
          <div style={headshotWrapper}>
            <img src={headshot.src} style={headshotStyles} />
            <h3>Corynne</h3>
          </div>{" "}
          <div style={headshotWrapper}>
            <img src={headshot.src} style={headshotStyles} />
            <h3>Grace</h3>
          </div>{" "}
          <div style={headshotWrapper}>
            <img src={headshot.src} style={headshotStyles} />
            <h3>Wayne</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
