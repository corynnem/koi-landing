import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Paper } from "@mui/material";
import flowerBackdrop from "../public/images/flower_backdrop.jpg";
import fullLeaf from "../public/images/fullLeaf.png";

const MissionStatement = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div
    className="shaddow odd-backdrop"
      style={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        marginTop: "200px",
        padding: "30px",
        marginBottom: "150px",
        zIndex: "5",
       
      }}
    >
      <div
      
        style={{
          position: "relative",
        }}
      >
        {/* <Image
          alt="swiping on dating apps"
          src={fullLeaf}
          className="full-leaf"
        /> */}
      </div>
      <Paper
        style={{
          padding: "20px",
          width: "70vw",
          backgroundImage: ` url(${flowerBackdrop.src})`,
          fontSize: "20px",
          zIndex: "5",
        }}
      ><center>
        <b className="project-explain">Our mission</b>
        <br></br> is to revolutionize the world of online dating by
        creating a platform where finding love is free, accessible, and
        enjoyable for everyone.
        </center>
      </Paper>
    </div>
  );
};

export default MissionStatement;
