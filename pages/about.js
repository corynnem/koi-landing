import React from "react";
import About from "components/AboutUs";
import Navbar from "components/Navbar";

const AboutUsPage = () => {
  return (
    <div>
      <Navbar />
      <div
        style={{
          position: "absolute",
          marginTop: "100px",
          paddingLeft: "10%",
          paddingRight: "10%",
        }}
      >
        <h1 style={{ textAlign: "center" }}> About Koi</h1>
        <p style={{ paddingLeft: "10%", paddingRight: "10%" }}>
          <br />
          Looking for love? Tired of swiping through impersonal profiles on
          corporate-owned dating apps? Look no further! Koi is all about finding
          love without any restrictions or limitations. We believe that finding
          love should be free, and everyone should have the opportunity to find
          their soulmate without any financial barriers. That's why our app is
          Koi is independently owned and operated, with no influence from big
          corporations. We put you in control of your dating experience, so you
          can connect with people who truly matter to you.
          <br />
          <br />
          At our dating app, everyone is welcome regardless of age, sexuality,
          or gender. We believe that love is love, and it knows no boundaries.
          Our app is inclusive, diverse, and welcoming to
          <b> everyone</b>.
          <br />
          <br />
          We also believe that dating should be fun! That's why we've designed
          our app to be engaging, interactive, and exciting. You'll have a blast
          swiping through profiles, sending messages, and making meaningful
          connections with like-minded people. Our app is not just another
          corporate-owned dating app that feels mechanical, disconnected, and
          impersonal. We're a community-driven platform that values human
          connection and real relationships.
          <br />
          <br />
          We're committed to creating a dating experience that's personal,
          authentic, and meaningful. And most importantly, we will not sell out
          to large corporations. We respect your privacy and your personal data,
          and we'll never compromise on that. We're here to build a better
          dating app that balances the playing field between genders and
          promotes healthy, happy relationships. So, what are you waiting for?
          Download our dating app today and start your journey to finding love.
          We promise it'll be an experience like no other!
        </p>
      </div>
    </div>
  );
};

export default AboutUsPage;