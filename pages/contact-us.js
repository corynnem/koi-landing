import React from "react";
import Navbar from "components/Navbar";

import koi from "../public/images/underwater_rocks.jpg";
import LetterC from "../public/images/letters/C1.png";
import LetterO from "../public/images/letters/o1.jpg";
import LetterN from "../public/images/letters/LowerN.png";
import LetterT from "../public/images/letters/T1.png";
import LetterA from "../public/images/letters/A1.png";
import LetterU2 from "../public/images/letters/U2.png";
import LetterS from "../public/images/letters/UpperS.png";
import woodenFigure from "../public/images/fig_1.png";
import flowerBackdrop from "../public/images/flower_backdrop.jpg";

const ContactPage = () => {
  const inputStyles = {
    display: "flex",
    flexDirection: "column",
    marginTop: "5px",
    height: "30px",
    borderRadius: "5px",
    border: "none",
    padding: "5px",
    width: "350px",
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
      }}
    >
      <Navbar />

      <div
        style={{
          position: "absolute",
          paddingLeft: "5%",
          paddingRight: "5%",
          position: "relative",
          width: "100vw",
          height: "100vh",
          overflowY: "scroll",
        }}
      >
        <div style={{ marginTop: "100px" }}>
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
                src={LetterC.src}
                className=" outline large"
                alt="Letter C"
              />
              <img
                src={LetterO.src}
                className=" outline medium"
                alt="Letter O"
              />
              <img
                src={LetterN.src}
                className=" outline medium"
                alt="Letter N"
              />
              <img
                src={LetterT.src}
                className=" outline medium"
                alt="Letter T"
              />
              <img
                src={LetterA.src}
                className=" outline medium"
                alt="Letter A"
              />
              <img
                src={LetterC.src}
                className=" outline medium"
                alt="Letter C"
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

          <div
            className="abt-paper"
            style={{
              padding: "50px",
              backgroundImage: ` url(${flowerBackdrop.src})`,
              height: "500px",
              width: "400px",

              position: "absolute",
              top: "60%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              padding: "10px",
              borderRadius: "10px",
            }}
          >
            <form
              id="fs-frm"
              name="simple-contact-form"
              accept-charset="utf-8"
              action="https://formspree.io/f/{form_id}"
              method="post"
              style={{ padding: "20px" }}
            >
              <fieldset
                id="fs-frm-inputs"
                style={{
                  border: "none",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div>
                  <h3 for="full-name">Name</h3>
                  <input
                    type="text"
                    name="name"
                    id="full-name"
                    placeholder="First and Last"
                    required=""
                    style={inputStyles}
                  />
                </div>
                <br />
                <br />
                <div>
                  <h3 for="email-address">Email Address</h3>

                  <input
                    type="email"
                    name="_replyto"
                    id="email-address"
                    placeholder="email@domain.tld"
                    required=""
                    style={inputStyles}
                  />
                </div>
                <br />
                <br />
                <div>
                  <h3 for="message">Message</h3>
                  <textarea
                    rows="5"
                    name="message"
                    id="message"
                    placeholder="Let us know what's up"
                    required=""
                    style={{
                      height: "200px",
                      width: "350px",
                      marginTop: "5px",
                      borderRadius: "5px",
                      border: "none",
                      padding: "5px",
                      resize: "none",
                    }}
                  ></textarea>
                </div>

                <input
                  type="hidden"
                  name="_subject"
                  id="email-subject"
                  value="Contact Form Submission"
                />
              </fieldset>
              <input
                type="submit"
                value="Submit"
                style={{
                  height: "25px",
                  width: "350px",
                  backgroundColor: "#d46407",
                  border: "none",
                  borderRadius: "5px",
                }}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
