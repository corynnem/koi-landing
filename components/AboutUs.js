import React from "react";
import Image from "next/image";
import woodGroup from "../public/images/fig_16.png";
import Paper from "@mui/material/Paper";
import letterT from "../public/images/letters/T1.png";
import letterH from "../public/images/letters/H1.jpg";
import letterE from "../public/images/letters/E1.png";
import letterP from "../public/images/letters/P2.png";
import letterR from "../public/images/letters/r1.jpg";
import letterO from "../public/images/letters/o1.jpg";
import letterJ from "../public/images/letters/j1.jpg";
import letterE2 from "../public/images/letters/E4.png";
import letterC from "../public/images/letters/C4.png";
import letterT2 from "../public/images/letters/T3.png";
import paperBackdrop from "../public/images/paper_backdrop.jpg";
import swiping from "../public/images/swiping.png";
import pay from "../public/images/pay_for_love.png";
import robots from "../public/images/robots.png";
import noMore from "../public/images/no_more.png";

const About = () => {
  return (
    <div
      className=" dot-border-yellow"
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "100px",
        position: "relative",
      }}
    >
      <svg width="0" height="0">
        {/* very useful : https://yqnn.github.io/svg-path-editor/ */}
        <clipPath id="path">
          <path
            d="M 0 1 V 1 L 4 2 L 8 7 L 13 7 L 18 6 L 23 4 L 27 2 L 31 3 L 35 3 L 43 2 L 53 2 L 61 3 L 68 5 L 73 10 L 81 11 L 87 
    14 L 95 14 L 100 17 L 106 14 L 111 12 L 117 12 L 123 10 L 127 6 L 130 1 L 136 1 L 139 -4 L 144 -1 L 148 2 L 152 4 L 156 7 
    L 161 6 L 164 5 L 168 4 L 174 0 L 177 -4 L 182 -1 L 182 -1 L 187 4 L 185 9 L 185 12 L 188 13 L 191 13 L 193 11 L 194 9 
    L 195 7 L 197 4 L 203 4 L 208 4 L 210 2 L 215 0 L 221 3 L 223 5 L 225 9 L 230 10 L 235 10 L 240 7 L 247 7 L 250 2 L 256 
    4 L 261 7 L 267 9 L 276 10 L 280 7 L 289 4 L 298 -2 L 302 4 L 308 7 L 315 7 L 328 8 L 339 7 L 345 5 L 356 7 L 364 5 L 
    370 2 L 378 1 L 381 5 L 387 8 L 391 3 L 395 3 L 399 4 L 404 6 L 407 7 L 412 6 L 416 6 L 419 5 L 422 3 L 425 1 L 428 0 L 
    432 3 L 434 5 L 435 7 L 437 9 L 443 9 L 445 7 L 448 6 L 451 5 L 454 5 L 458 5 L 459 4 L 462 3 L 464 4 L 462 5 L 460 8 L 
    463 8 L 466 8 L 469 6 L 474 3 L 481 2 L 483 4 L 487 4 L 492 2 L 500 4 L 507 7 L 515 10 L 526 11 L 533 10 L 537 8 L 542 9 
    L 547 8 L 550 5 L 556 3 L 561 3 L 566 6 L 573 8 L 580 8 L 587 6 L 595 4 L 610 10 L 618 8 L 623 2 L 631 4 L 639 6 L 646 10 
    L 659 9 L 667 9 L 673 7 L 679 6 L 685 5 L 693 2 L 699 5 L 703 8 L 709 11 L 712 15 L 717 15 L 721 14 L 725 11 L 728 9 L 728 
    11 L 728 14 L 730 17 L 731 18 L 733 19 L 736 17 L 739 16 L 742 15 L 744 13 L 747 11 L 752 10 L 755 9 L 757 5 L 760 4 L 765 4 
    L 768 2 L 772 3 L 774 2 L 778 0 L 781 2 L 784 3 L 789 3 L 792 2 L 795 2 L 797 4 L 801 4 L 804 3 L 807 2 L 811 2 L 812 4 L 
    815 6 L 818 7 L 821 7 L 823 6 L 827 5 L 830 7 L 834 7 L 837 5 L 842 4 L 849 8 L 854 12 L 863 12 L 868 11 L 873 11 L 878 13 
    L 883 12 L 888 11 L 894 11 L 898 10 L 900 9 L 902 10 L 906 8 L 914 8 L 921 6 L 927 5 L 932 5 L 934 7 L 933 9 L 929 11 L 
    929 13 L 935 13 L 938 12 L 942 11 L 945 9 L 951 7 L 957 9 L 960 7 L 965 8 L 971 6 L 974 5 L 983 5 L 988 3 L 992 4 L 992 
    4 L 997 3 L 1000 4 L 1002 5 L 1005 7 L 1008 10 L 1010 12 L 1015 13 L 1018 13 L 1022 12 L 1025 13 L 1028 16 L 1027 18 L 
    1026 21 L 1031 21 L 1035 20 L 1036 17 L 1037 17 L 1040 15 L 1042 14 L 1043 13 L 1045 11 L 1047 9 L 1051 5 L 1053 6 L 1056 6 
    L 1061 6 L 1064 5 L 1070 5 L 1074 4 L 1080 4 L 1084 3 L 1086 1 L 1088 0 H 1136 L 1138 2 L 1140 3 L 1142 5 L 1146 6 L 1148 5
     L 1151 5 L 1153 7 L 1156 8 L 1159 8 L 1163 9 L 1165 8 L 1171 7 L 1175 5 L 1179 4 L 1186 6 L 1190 8 L 1196 9 L 1199 8 L 1205 
     8 L 1209 10 L 1213 9 L 1217 7 L 1220 6 L 1225 6 L 1227 4 L 1231 5 L 1235 4 L 1237 2 L 1240 3 L 1244 7 L 1247 10 L 1248 12 L 
     1256 10 L 1260 11 L 1265 9 L 1271 9 L 1276 8 L 1280 6 L 1283 6 L 1286 8 L 1290 9 L 1292 7 L 1295 8 L 1298 8 L 1303 6 L 1309 
     6 L 1312 8 L 1317 8 L 1318 11 L 3560 9 L 3436 9973 L 0 10000 Z"
            id="Rectangle"
            fill="#000000"
          ></path>
        </clipPath>
      </svg>
      <Image
        alt="a group of wooden figurines standing behind the crinkled paper background photo"
        src={woodGroup}
        style={{
          width: "300px",
          height: "150px",
          position: "absolute",
          left: "10vw",
          top: "-130px",
        }}
      />

      {/* start about section torn */}
      <div className="torn-paper-shadow">
        <div
          className="torn-top "
          style={{
            display: "flex",
            justifyContent: "center",
            width: "80vw",
            flexDirection: "column",
            backgroundImage: ` url(${paperBackdrop.src})`,
            padding: "50px 10px 10px 10px",
          }}
        >
          {/* start about header  */}

          <div className="border-red">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                gap: "10px",
                paddingBottom: "20px",
                justifyContent: "center",
              }}
            >
              <div>
                <img src={letterT.src} className=" outline large" />
                <img src={letterH.src} className=" outline medium" />
                <img src={letterE.src} className=" outline medium" />
              </div>

              <div>
                <img src={letterP.src} className=" outline medium" />
                <img src={letterR.src} className=" outline medium" />
                <img src={letterO.src} className=" outline medium" />
                <img src={letterJ.src} className=" outline medium" />
                <img src={letterE2.src} className=" outline medium" />
                <img src={letterC.src} className=" outline medium" />
                <img src={letterT2.src} className=" outline medium" />
              </div>
            </div>
          </div>

          {/* END about header  */}

          <center><p className="blue-cutout">
            WE ARE MAKING A DATING APP THAT ACTUALLY WORKS!!
            </p>
            <br />
            <br />
           
          <Image
                alt="swiping on dating apps"
                src={noMore}
                className=""
                style={{
                  width: "90%",
                  height: "auto",
                  maxWidth: "200px"
                }}
              />
          </center>
          {/* Start No smoking images */}
          <div
            className="border-purple"
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "row",
              flexWrap: "wrap",
              gap: "50px 20px",
              paddingTop: "35px",
            }}
          >
            <div className="orange-square">
              <Image
                alt="swiping on dating apps"
                src={swiping}
                className="png-shadow center-xy"
                style={{
                  width: "90%",
                  height: "auto",
                }}
              />
              <p className="center-x orange-square-header">SWIPING</p>
            </div>

            <div className="orange-square">
              <Image
                alt="paying for love"
                src={pay}
                className=" png-shadow center-xy"
                style={{
                  width: "90%",
                  height: "auto",
                }}
              />
              <p className="center-x orange-square-header">PAYING</p>
            </div>

            <div className="orange-square">
              <Image
                alt="robots"
                src={robots}
                className=" png-shadow center-xy"
                style={{
                  width: "90%",
                  height: "auto",
                }}
              />
              <p className="center-x orange-square-header">BOTS</p>
            </div>

            <div className="orange-square">
              <p className="center-x orange-square-header">Also</p>
              <p className="spikey-1 spikey-box png-shadow  ">CATFISH</p>
              <p className="spikey-2 stubble-box png-shadow  ">LIES</p>
              <p className="spikey-3 spikey-box png-shadow  ">CREEPS</p>
              <p className="spikey-4 bubble-box png-shadow  ">
                VERY LIMITED SEARCH OPTIONS
              </p>
              <p className="spikey-5 spikey-box png-shadow  ">FAKE ACCOUNTS</p>
              <p className="spikey-6 bubble-box png-shadow  ">
                subscription tiers
              </p>
              <p className="spikey-7 spikey-box png-shadow  ">
                DATA COLLECTION
              </p>
              <p className="spikey-8 spikey-box png-shadow  ">BORINGNESS</p>
            </div>
          </div>
          {/* END No smoking images */}

          {/* start explanation  */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "40px",
              marginBottom: "40px",
            }}
          >
            <p className="project-explain">
              {" "}
              We are done. No one should have to put up with these AWFUL dating
              apps. Thats why this small band of programmers and designers have
              come together to build an app that actually cares and puts the
              power in your hands. We have come up with a 2 way search system,
              that should ensure you can find the people you are looking for.
              The overall plan is rather in depth because we are solving so many
              problems, but if you would like to see a list of our solutions
              click here!
            </p>
          </div>
          {/* end explanation  */}
        </div>
      </div>
      {/* end about section torn */}
    </div>
  );
};

export default About;
