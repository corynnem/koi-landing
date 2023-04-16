
import React, { useEffect, useState } from "react";
import Image from 'next/image'
import frog from "../public/images/flower_frog.png";


const FlowerFrog = () => {

       
return ( 
<div
className="dot-border-red"
      style={{
        width: 'fit-content',
        position: "absolute",
        left: '23%',
        top: '49%', 
        transform: 'translate(-50%, -50%)',
        zIndex: '1'

      }}>
      <Image src={frog} 
      style={
        {
          width: '33vh',
          height: 'auto',
          transform: 'rotate(-120deg)'
        }} />
</div>
)
};

export default FlowerFrog;