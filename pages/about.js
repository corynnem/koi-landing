import React, { useEffect } from "react";

import Navbar from "components/Navbar";
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
import { letterJumble } from "../components/custom";
import SupportUs from "components/SupportUs";
import woodenFigure from "../public/images/fig_1.png";
import dynamic from "next/dynamic";
import koi from "../public/images/underwater_rocks.jpg";

// dropdown opens and closes dropdown style paragraphs, while closing all other open paragraphs.
const dropdown = (e) => {
  // Check if we are on the server
  if (window !== undefined) {
    // Grab a list of all open dropdowns
    const actives = document.getElementsByClassName("active");

    // grab the content or open text box of the element the user just clicked
    var content = e.target.nextElementSibling;
    // check if the clicked element is open
    if (content.style.maxHeight) {
      //if its open => close it
      content.style.maxHeight = null;
      e.target.classList.toggle("active");
      e.target.nextElementSibling.classList.toggle("content-padding");
    } else {
      // if the clicked element is closed open it
      content.style.maxHeight = content.scrollHeight + "px";
      e.target.classList.toggle("active");
      e.target.nextElementSibling.classList.toggle("content-padding");
      // make sure there is at least 1 active (or opened) element
      if (actives[0] !== undefined) {
        // go through each element that has the active class
        for (let index = 0; index < actives.length; index++) {
          const element = actives[index];
          // close all elements that arent the one the user clicked (e.target is the user clicked element)
          if (element !== e.target) {
            var cont = element.nextElementSibling;
            cont.style.maxHeight = null;
            element.classList.toggle("active");
          }
        }
      }
    }
  }
};

const AboutUsPage = () => {
  return (
    <div
      className="ripples border-red"
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
        <div className="border-red">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              gap: "10px",
              paddingBottom: "20px",
              justifyContent: "center",
              marginTop: "250px",
            }}
          >
            <div>
              <img
                src={letterT.src}
                className=" outline large"
                alt="Letter T"
              />
              <img
                src={letterH.src}
                className=" outline medium"
                alt="Letter H"
              />
              <img
                src={letterE.src}
                className=" outline medium"
                alt="Letter E"
              />
            </div>

            <div>
              <img
                src={letterP.src}
                className=" outline medium"
                alt="Letter P"
              />
              <img
                src={letterR.src}
                className=" outline medium"
                alt="Letter R"
              />
              <img
                src={letterO.src}
                className=" outline medium"
                alt="Letter O"
              />
              <img
                src={letterJ.src}
                className=" outline medium"
                alt="Letter J"
              />
              <img
                src={letterE2.src}
                className=" outline medium"
                alt="Letter E"
              />
              <img
                src={letterC.src}
                className=" outline medium"
                alt="Letter C"
              />
              <img
                src={letterT2.src}
                className=" outline medium"
                alt="Letter T"
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
          <div
            className="abt-paper"
            style={{
              padding: "50px",
              marginTop: "-110px",
            }}
          >
            <center>
              <p className="project-explain">
                Want to hear all about Koi&apos;s solutions to the major dating
                app problems?<br></br> Have no fear! Just click on a problem to
                see how we plan to fix it.{" "}
              </p>
            </center>
            <br></br>

            <button onClick={dropdown} className="collapsible">
              Pay Walls
            </button>
            <div className="content">
              <p>
                <b>The Problem:</b> Dating apps control search options, hide
                human beings, and your ability to connect behind paywalls.{" "}
              </p>
              <br></br>
              <p>
                <b>The Solution:</b> Our vision is to completely eliminate ALL
                paywalls on Koi, allowing you to connect with anyone, and
                we&apos;re planning on non-intrusive ad space and allowing only
                small businesses to advertise through small, UI-integrated
                things like posters or billboards. We&apos;re also planning on
                including a donation-based model similar to Wikipedia&apos;s, so
                we can keep the app accessible and free for everyone.{" "}
              </p>
            </div>

            <button onClick={dropdown} className="collapsible">
              Limited Filters
            </button>
            <div className="content">
              <p>
                <b>The Problem:</b> Navigating dating apps can be frustrating
                when the ability to find exactly what you&apos;re seeking feels
                limited. Often, these platforms disregard your set preferences
                entirely, presenting potential matches that don&apos;t align
                with your criteria. For instance, if you specify your preference
                for women, you might STILL find yourself encountering men&apos;s
                profiles, making the filter pointless.
              </p>
              <br></br>
              <p>
                <b>The Solution:</b> Imagine having access to an array of
                filters that truly captures what matters most to you. Have pets
                and need someone who loves animals? We&apos;ve got you covered.
                Do you have a tidy living space and can&apos;t stand messiness?
                No problem, we&apos;ve got options for that too! With our app,
                you can rank your preferences on a scale of “must-have” to
                “nice-to-have” and we&apos;ll do the rest. You won&apos;t even
                be shown profiles of people who don&apos;t meet your criteria,
                streamlining your search and making it easy to find people who
                are compatible. We&apos;re dedicated to giving you a seamless
                experience, which is why we&apos;ll have dozens of these options
                to make it easy for you to find exactly what you want. Plus, we
                won&apos;t bog you down with tedious profile-filling
                requirements. Instead, we&apos;re designing a user-friendly
                interface that allows you to fill out your profile as you go.
                For instance, let&apos;s say someone has listed “loves nature”
                as a “must-have” in their profile, but you haven&apos;t
                addressed that yet. Don&apos;t worry! We&apos;ll prompt you with
                a pop-up asking your thoughts on the matter. If you love nature,
                it&apos;s a match made in heaven - if you hate it, the
                person&apos;s profile will disappear and you can continue on
                with your search.{" "}
              </p>
            </div>

            <button onClick={dropdown} className="collapsible">
              Limited Connections
            </button>
            <div className="content">
              <p>
                <b>The Problem:</b> You&apos;re matching with almost no one,
                making dating feel frustrating and lonely. The root of this
                problem is that a lot of people on these apps are overwhelmed
                with matches to the point that they can&apos;t find you.{" "}
              </p>
              <br></br>
              <p>
                <b>The Solution:</b> To give you the tools to expand your
                options and others the tools to narrow them, making a genuine
                connection much more likely for both people. This will be
                achieved via our 2 way search system and our robust filtering
                options.{" "}
              </p>
            </div>

            <button onClick={dropdown} className="collapsible">
              Too Many Connections
            </button>
            <div className="content">
              <p>
                <b>The Problem:</b> You&apos;re matching with so many people you
                can&apos;t possibly sort through everyone. This makes it so
                overwhelming to be on dating apps that you don&apos;t even want
                to use them anymore.{" "}
              </p>
              <br></br>
              <p>
                <b>The Solution:</b> To give you the tools to narrow your
                options, making a genuine connection much more likely for
                everyone. You won&apos;t have to sort through hundreds of people
                and can immediately find the people that are compatible with
                you. This will be achieved via our 2 way search system and our
                refined filtering options.{" "}
              </p>
            </div>

            <button onClick={dropdown} className="collapsible">
              No One Reads Profiles
            </button>
            <div className="content">
              <p>
                <b>The Problem:</b> Because of the superficial nature of most
                dating apps, a lot of people don&apos;t read profiles - it can
                even go as far as only looking at one picture before left or
                right swiping. This leads to tons of mismatches, as people are
                only glancing at how you look and not paying attention to what
                makes you you.{" "}
              </p>
              <br></br>
              <p>
                <b>The Solution:</b> Instead of putting the task of judging
                compatibility on the user, we plan to use our filtering system
                to match all users&apos; specifications. Those important details
                about who you are will actually change who interacts with you
                instead of sitting ignored in your profile description.{" "}
              </p>
            </div>

            <button onClick={dropdown} className="collapsible">
              Is Anyone Online?
            </button>
            <div className="content">
              <p>
                <b>The Problem:</b> There is never a way to see if the people
                that you&apos;re interested in talking to are using the app, or
                even if they&apos;ve been active in the last year. This can make
                it feel like you are adrift in a sea of profiles that no one is
                using.{" "}
              </p>
              <br></br>
              <p>
                <b>The Solution:</b> This one is simple: Showing you who is
                online at the same time you are and by showing you the last time
                a profile was used. Any profiles that go unused for more than a
                week will be deactivated until they&apos;re signed into again,
                which means you will never be seeing phantom profiles.{" "}
              </p>
            </div>

            <button onClick={dropdown} className="collapsible">
              There Are Kids on Here!
            </button>
            <div className="content">
              <p>
                <b>The Problem:</b> People under the age of 18 are mixed in with
                adults on dating apps.{" "}
              </p>
              <br></br>
              <p>
                <b>The Solution:</b> An ID verification system that assures that
                no one under the age of 18 can use our app.{" "}
              </p>
            </div>

            <button onClick={dropdown} className="collapsible">
              Low/Random Quality Connections
            </button>
            <div className="content">
              <p>
                <b>The Problem:</b> A dating app typically shows you everyone in
                a set area, rather than showing you people that are compatible
                with you in any capacity.{" "}
              </p>
              <br></br>
              <p>
                <b>The Solution:</b> To give our users a filtering system where
                they can rank qualities that are important to them, whether that
                be physical or personality driven. To read more about our
                two-way filtering system, see the “Limited Filters” tab!{" "}
              </p>
            </div>

            <button onClick={dropdown} className="collapsible">
              Swiping
            </button>
            <div className="content">
              <p>
                <b>The Problem:</b> F*CK SWIPING!{" "}
              </p>
              <br></br>
              <p>
                <b>The Solution:</b> No MORE F*CKING SWIPING! At Koi, we've
                revolutionized the way you find and view profiles. Our dating
                platform takes the form of a charming town, with each building
                representing different relationship goals. For instance, the BAR
                is for those seeking casual relationships or hookups, while
                other buildings cater to various relationship styles.
                Conversations in specific areas make intentions clear, and the
                purpose of each area is reinforced upon entry. Inside buildings,
                you'll find users matching your criteria for that area. When
                interested in someone, our system checks for important missing
                information flagged by the other person, ensuring compatibility.
                If everything aligns, start chatting! If not, you're protected
                from conversations that wouldn't go anywhere. If the
                conversation goes well, exchanging in-app phone numbers is an
                option, and both users are saved in each other's in-app phone
                book, effectively becoming matches. This system allows
                individuals to move at the pace they want, does not treat people
                like objects, and gives users the space to talk casually BEFORE
                any match is made.{" "}
              </p>
            </div>

            <button onClick={dropdown} className="collapsible">
              Fake Profiles{" "}
            </button>
            <div className="content">
              <p>
                <b>The Problem:</b> Dating apps will take random pictures of
                attractive people and create fake profiles to make their apps
                look better and more exciting than they really are.{" "}
              </p>
              <br></br>
              <p>
                <b>The Solution:</b> At Koi we will only ever show real and
                active profiles. No fake ones to make the user pool look better…
                ever. Each profile will also be ID verified, so only 1 person is
                ever associated with a single account. Part of our overall goal
                at Koi is 100% transparency. We want you to know exactly who is
                online. Whether that number is small or large, you will have the
                REAL picture of who is in the dating pool.{" "}
              </p>
            </div>

            <button onClick={dropdown} className="collapsible">
              Creeps
            </button>
            <div className="content">
              <p>
                <b>The Problem:</b> Dating apps are swarming with creepy people
                who either want to take advantage of others or just send
                uncomfortable comments/pictures.{" "}
              </p>
              <br></br>
              <p>
                <b>The Solution:</b> A private user voting system, where a
                certain amount of votes on someone will give them a red flag
                icon on their profile. When clicked, this icon will tell you how
                many people have complained of reportable behavior -- i.e.
                creepy, aggressive, or a ghoster -see ghosting-. If the unwanted
                behavior continues and votes pass a certain threshold, this user
                will receive a ban from the app.{" "}
              </p>
            </div>

            <button onClick={dropdown} className="collapsible">
              Catfish
            </button>
            <div className="content">
              <p>
                <b>The Problem:</b> People get on dating apps and pretend to be
                someone they aren&apos;t.{" "}
              </p>
              <br></br>
              <p>
                <b>The Solution:</b> Everyone must capture at least 1 photo
                through the app of themselves - no filters and with no
                possibility for editing. This combined with our user voting
                system should eventually eliminate all catfish swimming in the
                Koi pond.{" "}
              </p>
            </div>

            <button onClick={dropdown} className="collapsible">
              ”Sales” People
            </button>
            <div className="content">
              <p>
                <b>The Problem:</b> Dating apps are notorious for people trying
                to sell services, products, nudes, pornography etc.{" "}
              </p>
              <br></br>
              <p>
                <b>The Solution:</b> Koi&apos;s user voting system effectively
                filters out individuals misusing our app for such unintended
                purposes. These users won't be able to come back as their
                activity will be associated with their ID because of our ID
                verification system. This approach not only discourages
                salespeople but ensures that Koi can be enjoyed as intended by
                genuine users.{" "}
              </p>
            </div>

            <button onClick={dropdown} className="collapsible">
              No Idea What the Other Person is Into Sexually
            </button>
            <div className="content">
              <p>
                <b>The Problem:</b> No other dating app has the option to
                privately display your information about what you like in bed -
                you have to put it on blast publicly if you want potential
                partners to know, which can lead to awkward situations if
                someone you know sees it.{" "}
              </p>
              <br></br>
              <p>
                <b>The Solution:</b> Within our filter system, Koi will include
                a blind search that matches some criteria without displaying
                that information publicly. We&apos;ll also have an area within
                the app for our kinky users - a masquerade-type search where you
                can see what people like sexually, but can only see their entire
                profile if you decide to chat privately. This protects the
                privacy of our users while allowing them to explore their sexual
                sides simultaneously.{" "}
              </p>
            </div>

            <button onClick={dropdown} className="collapsible">
              Hook Ups? Serious Relationships? Both?{" "}
            </button>
            <div className="content">
              <p>
                <b>The Problem:</b> People looking for different types of
                connections are all mixed together making talking confusing for
                everyone.{" "}
              </p>
              <br></br>
              <p>
                <b>The Solution:</b> Allowing you the space to choose exactly
                what you&apos;re looking for whether that be a serious
                relationship, a hookup, friends with benefits, or even
                nonmonogamy and letting you see everyone who is looking for the
                same thing without the classic and repetitive “so what are you
                looking for?” conversation. The various spaces within the app
                will also make it very clear what the users around you are
                looking for. Check out the “what will Koi look like?” tab for
                more information on these spaces.{" "}
              </p>
            </div>

            <button onClick={dropdown} className="collapsible">
              Feeling Unrepresented
            </button>
            <div className="content">
              <p>
                <b>The Problem:</b> Dating apps don&apos;t allow inclusive
                options for less represented groups of people, such as
                polyamorous folks or kinky people.{" "}
              </p>
              <br></br>
              <p>
                <b>The Solution:</b> Making Koi an all-inclusive app by giving
                options for everyone, and also by allowing users to voice and
                vote on concerns for new features or future updates. Whatever
                the unrepresented group is, Koi is dedicated to creating a space
                for these people to find what they might be looking for
                romantically or sexually.
              </p>
            </div>

            <button onClick={dropdown} className="collapsible">
              So Boring!
            </button>
            <div className="content">
              <p>
                <b>The Problem:</b> It&apos;s no secret that almost every dating
                app follows the same formula - see pictures, glance at words,
                skip or like. Not to mention that most of them are just mindless
                swiping, completely taking all the possible fun out of dating
                online.{" "}
              </p>
              <br></br>
              <p>
                <b>The Solution:</b> We are switching things up and creating an
                interactive fun space with much more to do, explore, and play
                with. We want to create a space that puts the fun back in
                functional. (sorry … we couldn't help ourselves)
              </p>
            </div>

            <button onClick={dropdown} className="collapsible">
              Selling user Data
            </button>
            <div className="content">
              <p>
                <b>The Problem:</b> Dating apps, like many other apps, sell user
                data as part of their income stream.{" "}
              </p>
              <br></br>
              <p>
                <b>The Solution:</b> Simple… Your data will never be sold. Ever.
                We will also never allow our company to go public or be bought
                out for any reason, thereby ensuring that your data is protected
                and safe forever.{" "}
              </p>
            </div>

            <button onClick={dropdown} className="collapsible">
              What Will Koi Look Like?
            </button>
            <div className="content">
              <p>
                {" "}
                Koi will be designed to look like a cartoon town. Each building
                will be hand-designed to reflect : our plan for enterable
                buildings include a bar for casual relationships, a coffee shop
                for serious connections, a kinky club for those prioritizing
                sexual needs while maintaining user privacy, an event center for
                activities like speed dating, a community building for user
                voting on new features, a library for reading Koi-written
                articles on dating advice, and a few others that we&apos;re
                still finalizing ideas on. When you enter a place, you&apos;ll
                have a clickable avatar for other players to interact with, but
                we haven&apos;t decided on the look or mobility of these avatars
                yet.{" "}
              </p>
            </div>

            <button onClick={dropdown} className="collapsible">
              I Don&apos;t Like the Sound of a Little Town Type of Dating App…{" "}
            </button>
            <div className="content">
              <p>
                {" "}
                If you don&apos;t like the sound of an interactive, town-modeled
                dating app, we&apos;ll have a button to show a grid-view of
                users to look through. They&apos;ll still have all of the perks
                of our filtering options and areas, but you will see a more
                traditional looking app.{" "}
              </p>
            </div>

            <button onClick={dropdown} className="collapsible">
              What if I'm Not Particular?
            </button>
            <div className="content">
              <p>
                With Koi's two-way search system, you have the flexibility to
                see everyone who might be interested in you, even if you're not
                actively seeking anything specific. If you prefer to explore all
                potential matches without setting preferences, that's completely
                possible! Just remember that while you may not have specific
                criteria, other users probably will. To interact with those
                users and move beyond profile viewing, you'll be prompted to
                provide the necessary information to determine your
                compatibility with that person. However, if that is still a
                problem, you can elect to only see people who aren&apos;t
                particular about what they are looking for either!{" "}
              </p>
            </div>

            <button onClick={dropdown} className="collapsible">
              What if I&apos;m REALLY Particular?
            </button>
            <div className="content">
              <p>
                <b>The Problem:</b> You feel like you can&apos;t find someone
                because you&apos;re really picky about the kind of person that
                you want.{" "}
              </p>
              <br></br>
              <p>
                <b>The Solution:</b> Surprise, surprise, once again, the
                solution is our filtering system! By having all of the options
                available to list, you&apos;ll only ever see people who fit with
                your needs and specifications. That way, no one&apos;s time gets
                wasted. Even if you&apos;re seeing a lot less people,
                they&apos;ll always match up with whatever details you list.{" "}
              </p>
            </div>

            <button onClick={dropdown} className="collapsible">
              What About People Changing Their Qualities or Interests
              Constantly?
            </button>
            <div className="content">
              <p>
                People will not be able to update their own qualities or
                interests more than once a month, meaning that if they answer a
                question that disqualifies them from a person&apos;s profile
                that they really wanted to see, they can&apos;t go back
                immediately to change it so they can talk to that person. This
                ensures honesty and keeps Koi focused on matching people based
                on compatibility for users who are looking for that. However,
                you are allowed to change what you are looking for at any time
                and as much as you&apos;d like.
              </p>
            </div>
          </div>{" "}
          {/* Closing div for the backdrop */}
          {/* <p
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
          </p> */}
        </div>
        <SupportUs />
      </div>
    </div>
  );
};

export default AboutUsPage;
