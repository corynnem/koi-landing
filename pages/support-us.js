import React from "react";
import Navbar from "components/Navbar";
import koi from "../public/images/underwater_rocks.jpg";
import tikTok from "../public/images/tik-tok.png";
import patreon from "../public/images/patreon.png";
import indiegogo from "../public/images/indiegogo.png";
import instagram from "../public/images/instagram.png";
import bubbleWrap from "../public/images/bubblewrap.jpg";

const SupportUsPage = () => {
  const smiley = ":)";
  const imgStyles = {
    height: "100px",
  };
  return (
    <div
      style={{
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        minWidth: "354px",
        position: "relative",
        backgroundImage: ` url(${koi.src})`,
        height: "100%",
        width: "100%",
        textAlign: "center",
      }}
    >
      <div>
        <Navbar />
      </div>

      <div
        style={{
          position: "absolute",

          paddingLeft: "5%",
          paddingRight: "5%",
          position: "relative",

          width: "100vw",
          height: "100vh",
          overflowY: "scroll",
          backgroundImage: ` url(${bubbleWrap.src})`,
        }}
      >
        <div style={{ marginTop: "100px" }}>
          <h1>Want to help this project but don't know where to start?</h1>
          <p>
            Look no further! Below you will find all of the important links &
            pages to support the development of your new favorite dating app{" "}
            {smiley}
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            marginTop: "50px",
            flexWrap: "wrap",
          }}
        >
          <img style={imgStyles} src={tikTok.src} />
          <img style={imgStyles} src={patreon.src} />
          <img style={imgStyles} src={indiegogo.src} />
          <img style={imgStyles} src={instagram.src} />
        </div>
      </div>
    </div>
  );
};

export default SupportUsPage;
