import React, { useEffect } from 'react'
import koi from '../public/images/koi.jpeg'
import logo from '../public/images/logo.png'
import $ from 'jquery'
let ripples = import('jquery.ripples');


const Welcome = () => {



    useEffect(() => {

    $('#ripples').ripples({
        resolution: 512,
        dropRadius: 20,
        perturbance: 0.04,
      });
      screen;
    });
  }, []);

  return (
    <div id="ripples">
      <h1
        style={{
          fontSize: "80px",
          height: "80px",
          position: "relative",
          top: -30,
          zIndex: 1000,
          color: "white",
          marginLeft: "50px",
        }}
      >
        K
        <img
          src={logo.src}
          style={{
            width: "80px",
            marginBottom: "-10px",
            position: "relative",
            zIndex: 1000,
          }}
        />
        i
      </h1>
      <img
        src={koi.src}
        style={{
          width: "100vw",
          zIndex: "-1000",
          position: "relative",
          marginTop: "-225px",
        }}
      />
    </div>
  );
};

export default Welcome;
