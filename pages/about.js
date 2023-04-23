import React, { useEffect } from "react";

import Navbar from "components/Navbar";
import LetterA from "../public/images/letters/A1.png";
import LetterB from "../public/images/letters/b1.jpg";
import LetterO from "../public/images/letters/o1.jpg";
import LetterU from "../public/images/letters/U1.png";
import LetterT from "../public/images/letters/T1.png";
import LetterU2 from "../public/images/letters/U2.png";
import LetterS from "../public/images/letters/UpperS.png";
import { letterJumble } from "../components/custom";
import SupportUs from "components/SupportUs";
import woodenFigure from "../public/images/fig_1.png";

const AboutUsPage = () => {
  useEffect(() => {
    letterJumble();
  }, []);
  return (
    <div>
      <Navbar />
      <div
        style={{
          position: "absolute",
          marginTop: "100px",
          paddingLeft: "5%",
          paddingRight: "5%",
        }}
      >
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              gap: "10px",
              justifyContent: "center",
            }}
          >
            <div>
              <img
                src={LetterA.src}
                className=" outline large"
                alt="Letter A"
              />
              <img
                src={LetterB.src}
                className=" outline medium"
                alt="Letter B"
              />
              <img
                src={LetterO.src}
                className=" outline medium"
                alt="Letter O"
              />
              <img
                src={LetterU.src}
                className=" outline medium"
                alt="Letter U"
              />
              <img
                src={LetterT.src}
                className=" outline medium"
                alt="Letter T"
              />
            </div>

            <div>
              <img
                src={LetterU2.src}
                className=" outline medium"
                alt="Letter U"
              />
              <img
                src={LetterS.src}
                className=" outline medium"
                alt="Letter S"
              />
            </div>
          </div>
        </div>
        <div
          style={{
            marginTop: "-40px",
          }}
        >
          <br />
          <img
            alt="wooden figure sitting on the text"
            src={woodenFigure.src}
            style={{
              marginLeft: "-50px",
              width: "150px",
              height: "auto",
            }}
          />
          <p
            className="abt-paper"
            style={{
              padding: "50px",
              marginTop: "-110px",
            }}
          >
            Looking for love? Tired of swiping through impersonal profiles on
            corporate-owned dating apps? Look no further! Koi is all about
            finding love without any restrictions or limitations. That&apos;s
            why our app is Koi is independently owned and operated, with no
            influence from big corporations. We put you in control of your
            dating experience, so you can connect with people who truly matter
            to you.
            <br />
            <br />
            At our dating app, everyone is welcome regardless of age, sexuality,
            or gender. We believe that love is love, and it knows no boundaries.
            Our app is inclusive, diverse, and welcoming to
            <b> everyone</b>.
            <br />
            <br />
            We also believe that dating should be fun! Tha&apos;s why we&apos;ve
            designed Koi to be engaging, interactive, and exciting. Our app is
            not just another corporate-owned dating app that feels mechanical,
            disconnected, and impersonal. We&apos;re a community-driven platform
            that values human connection and real relationships.
            <br />
            <br />
            Most importantly, we will not sell out to large corporations. We
            respect your privacy and your personal data, and we&apos;ll never
            compromise on that. We&apos;re here to build a better dating app
            that balances the playing field between genders and promotes
            healthy, happy relationships. So, what are you waiting for? Download
            our dating app today and start your journey to finding love. We
            promise it&apos;ll be an experience like no other!
          </p>
        </div>
        <SupportUs />
      </div>
    </div>
  );
};

export default AboutUsPage;
