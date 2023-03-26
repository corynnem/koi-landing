import React, { useEffect, useState } from "react";
import { Paper } from "@mui/material";

const MissionStatement = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "100px" }}
    >
      <Paper
        style={{
          padding: "40px",
          width: "70vw",
          backgroundColor: "#B47F57",
          fontSize: "20px",
        }}
      >
        <b>Our mission</b> is to revolutionize the world of online dating by
        creating a platform where finding love is free, accessible, and
        enjoyable for everyone.
        {width > 750 &&
          "We believe that corporations should not control how individuals search for and connect with potential partners, and that everyone, regardless of their sexual orientation, gender identity, or age, should have equal access to our app. We are committed to building a large company without greed, and what better way to do that than by exporting love? Our goal is to create a fun and personalized experience for our users, where meeting new people feels natural and authentic, and where the playing field is balanced between genders. We will never compromise on our values and ethics by selling out to large corporations for personal data or money. Join us in our mission to find love, and let's build a better, more connected world together."}
      </Paper>
    </div>
  );
};

export default MissionStatement;
