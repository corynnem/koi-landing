import React from "react";
import Image from "next/image";
import logo from "../public/images/logo.png";

const SplashScreen = () => {


return(
    <div
    style={{
        position: "absolute",
        left: "0",
        top: "0",
        width: "100%",
        height: "100%",
        backgroundColor: "#3cd8ff",
        display: "flex", 
        justifyContent: "center",
        alignItems: "center",
    }}
    >
<Image
            id="splash"
          alt="Koi Logo of 2 cartoon fish"
          src={logo}
          className="splash-logo"
        />
    </div>
    );
};

export default SplashScreen;