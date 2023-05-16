
import React, { useEffect } from "react";
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
import leftleaf from "../public/images/leftLeaf.png";
import bestLeaf from "../public/images/best_leaf.png";
import robots from "../public/images/robots.png";
import noMore from "../public/images/no_more.png";

// dropdown opens and closes dropdown style paragraphs, while closing all other open paragraphs. 
const dropdown = (e) =>  {
  // Check if we are on the server
  if (window !== undefined) {
    // Grab a list of all open dropdowns
  const actives = document.getElementsByClassName("active");

  // grab the content or open text box of the element the user just clicked
  var content = e.target.nextElementSibling;
  // check if the clicked element is open
  if (content.style.maxHeight){
    //if its open => close it
    content.style.maxHeight = null;
    e.target.classList.toggle("active");
  } else {
    // if the clicked element is closed open it
    content.style.maxHeight = content.scrollHeight + "px";
    e.target.classList.toggle("active");
    // make sure there is at least 1 active (or opened) element 
    if (actives[0] !== undefined){
      // go through each element that has the active class
    for (let index = 0; index < actives.length; index++) {
      const element = actives[index];
      // close all elements that arent the one the user clicked (e.target is the user clicked element)
      if(element !== e.target){
        var cont = element.nextElementSibling;
        cont.style.maxHeight = null;
        element.classList.toggle("active");
      } 
    }
     
      
      
    }
    
}


 
    
  
 

  }
}


const About = () => {

  useEffect(() => {
    
  }, []);


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
            d="M 0 1 V 1 L 4 2 L 8 7 L 13 7 L 18 6 L 23 4 L 27 2 L 31 3 L 35 3 L 43 2 L 53 2 L 61 3 L 68 5 L 73 10 L 81 11 L 87 14 L 95 14 L 100 17 L 106 14 L 111 12 L 117 12 L 123 10 L 127 6 L 130 1 L 136 1 L 139 -4 L 144 -1 L 148 2 L 152 4 L 156 7 L 161 6 L 164 5 L 168 4 L 174 0 L 177 -4 L 182 -1 L 182 -1 L 187 4 L 185 9 L 185 12 L 188 13 L 191 13 L 193 11 L 194 9 L 195 7 L 197 4 L 203 4 L 208 4 L 210 2 L 215 0 L 221 3 L 223 5 L 225 9 L 230 10 L 235 10 L 240 7 L 247 7 L 250 2 L 256 4 L 261 7 L 267 9 L 276 10 L 280 7 L 289 4 L 298 -2 L 302 4 L 308 7 L 315 7 L 328 8 L 339 7 L 345 5 L 356 7 L 364 5 L 370 2 L 378 1 L 381 5 L 387 8 L 391 3 L 395 3 L 399 4 L 404 6 L 407 7 L 412 6 L 416 6 L 419 5 L 422 3 L 425 1 L 428 0 L 432 3 L 434 5 L 435 7 L 437 9 L 443 9 L 445 7 L 448 6 L 451 5 L 454 5 L 458 5 L 459 4 L 462 3 L 464 4 L 462 5 L 460 8 L 463 8 L 466 8 L 469 6 L 474 3 L 481 2 L 483 4 L 487 4 L 492 2 L 500 4 L 507 7 L 515 10 L 526 11 L 533 10 L 537 8 L 542 9 L 547 8 L 550 5 L 556 3 L 561 3 L 566 6 L 573 8 L 580 8 L 587 6 L 595 4 L 610 10 L 618 8 L 623 2 L 631 4 L 639 6 L 646 10 L 659 9 L 667 9 L 673 7 L 679 6 L 685 5 L 693 2 L 699 5 L 703 8 L 709 11 L 712 15 L 717 15 L 721 14 L 725 11 L 728 9 L 728 11 L 728 14 L 730 17 L 731 18 L 733 19 L 736 17 L 739 16 L 742 15 L 744 13 L 747 11 L 752 10 L 755 9 L 757 5 L 760 4 L 765 4 L 768 2 L 772 3 L 774 2 L 778 0 L 781 2 L 784 3 L 789 3 L 792 2 L 795 2 L 797 4 L 801 4 L 804 3 L 807 2 L 811 2 L 812 4 L 815 6 L 818 7 L 821 7 L 823 6 L 827 5 L 830 7 L 834 7 L 837 5 L 842 4 L 849 8 L 854 12 L 863 12 L 868 11 L 873 11 L 878 13 L 883 12 L 888 11 L 894 11 L 898 10 L 900 9 L 902 10 L 906 8 L 914 8 L 921 6 L 927 5 L 932 5 L 934 7 L 933 9 L 929 11 L 929 13 L 935 13 L 938 12 L 942 11 L 945 9 L 951 7 L 957 9 L 960 7 L 965 8 L 971 6 L 974 5 L 983 5 L 988 3 L 992 4 L 992 4 L 997 3 L 1000 4 L 1002 5 L 1005 7 L 1008 10 L 1010 12 L 1015 13 L 1018 13 L 1022 12 L 1025 13 L 1028 16 L 1027 18 L 1026 21 L 1031 21 L 1035 20 L 1036 17 L 1037 17 L 1040 15 L 1042 14 L 1043 13 L 1045 11 L 1047 9 L 1051 5 L 1053 6 L 1056 6 L 1061 6 L 1064 5 L 1070 5 L 1074 4 L 1080 4 L 1084 3 L 1086 1 L 1088 0 H 1136 L 1138 2 L 1140 3 L 1142 5 L 1146 6 L 1148 5 L 1151 5 L 1153 7 L 1156 8 L 1159 8 L 1163 9 L 1165 8 L 1171 7 L 1175 5 L 1179 4 L 1186 6 L 1190 8 L 1196 9 L 1199 8 L 1205 8 L 1209 10 L 1213 9 L 1217 7 L 1220 6 L 1225 6 L 1227 4 L 1231 5 L 1235 4 L 1237 2 L 1240 3 L 1244 7 L 1247 10 L 1248 12 L 1256 10 L 1260 11 L 1265 9 L 1271 9 L 1276 8 L 1280 6 L 1283 6 L 1286 8 L 1290 9 L 1292 7 L 1295 8 L 1298 8 L 1303 6 L 1309 6 L 1312 8 L 1317 8 L 1320 11 L 1328 11 L 1332 13 L 1338 10 L 1346 9 L 1349 13 L 1355 15 L 1361 16 L 1366 19 L 1372 18 L 1373 18 L 1378 16 L 1380 12 L 1380 12 L 1381 9 L 3560 9 L 3436 9973 L -2478 9979 Z"
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
            WE ARE DEVELOPING A DATING APP THAT ACTUALLY WORKS!!
            </p>
            
           
          
          <Image
                alt="swiping on dating apps"
                src={leftleaf}
                className="leftleaf"
                
              />
          </center>

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
              No one should have to put up with these AWFUL dating
              apps. Thats why this small band of programmers and designers have
              come together to build an app that actually cares and puts the
              power in your hands. We have come up with a 2 way search system,
              that should ensure you can find the people you are looking for.
              The overall plan is rather in depth because we are solving so many
              problems, but if you would like a more in depth exploration check out
              our list of solutions below: 
            </p>
          </div>
          {/* end explanation  */}
         


<button onClick={dropdown} className="collapsible">Pay Walls</button>
<div className="content">
  <p><b>The Problem:</b> Dating apps control search options, hide human 
    beings, and your ability to connect behind paywalls.  </p>
<br></br>
 <p><b>The Solution:</b> Our vision is to completely eliminate
   ALL paywalls on Koi, allowing you to connect with anyone, and 
   we’re planning on non-intrusive ad space and allowing only 
   small businesses to advertise through small, UI-integrated 
   things like posters or billboards. We’re also planning on 
   including a donation-based model similar to Wikipedia’s, 
   so we can keep the app accessible and free for everyone.  </p>


</div>




<button onClick={dropdown} className="collapsible">Limited Filters</button>
<div className="content">
   <p><b>The Problem:</b> Navigating dating apps can be frustrating when 
    the ability to find exactly what you’re seeking feels limited.
     Often, these platforms disregard your set preferences entirely,
      presenting potential matches that don’t align with your 
      criteria. For instance, if you specify your preference for 
      women, you might STILL find yourself encountering men’s 
      profiles, making the filter pointless.</p>
<br></br>
 <p><b>The Solution:</b> Imagine having access to an array of filters 
  that truly captures what matters most to you. Have pets and need 
  someone who loves animals? We’ve got you covered. Do you have a 
  tidy living space and can’t stand messiness? No problem, we’ve 
  got options for that too! With our app, you can rank your 
  preferences on a scale of “must-have” to “nice-to-have” and 
  we’ll do the rest. You won’t even be shown profiles of people 
  who don’t meet your criteria, streamlining your search and 
  making it easy to find people who are compatible. We’re 
  dedicated to giving you a seamless experience, which is why 
  we’ll have dozens of these options to make it easy for you
   to find exactly what you want. Plus, we won’t bog you down 
   with tedious profile-filling requirements. Instead, we’re 
   designing a user-friendly interface that allows you to fill 
   out your profile as you go. For instance, let’s say someone 
   has listed “loves nature” as a “must-have” in their profile,
    but you haven’t addressed that yet. Don’t worry! We’ll prompt 
    you with a pop-up asking your thoughts on the matter. If you 
    love nature, it’s a match made in heaven - if you hate it, 
    the person’s profile will disappear and you can continue on
     with your search. </p>


</div>




 <button onClick={dropdown} className="collapsible">
Limited Connections</button>
<div className="content">
  <p><b>The Problem:</b> You’re matching with almost no one, making dating
     feel frustrating and lonely. The root of this problem is that 
     a lot of people on these apps are overwhelmed with matches to 
     the point that they can’t find you.  </p>
<br></br>
 <p><b>The Solution:</b> To give you the tools to expand your
   options and others the tools to narrow them, making a 
   genuine connection much more likely for both people. 
   This will be achieved via our 2 way search system and 
   our robust filtering options.  </p>
</div>






<button onClick={dropdown} className="collapsible">
Too Many Connections
</button>
<div className="content">
   <p><b>The Problem:</b> You’re matching with so many people you
     can’t possibly sort through everyone. This makes it 
     so overwhelming to be on dating apps that you don’t
      even want to use them anymore. </p>
<br></br>
 <p><b>The Solution:</b> To give you the tools to narrow your 
  options, making a genuine connection much more likely
   for everyone. You won’t have to sort through hundreds
    of people and can immediately find the people that
    are compatible with you. This will be achieved via
    our 2 way search system and our refined filtering options. </p>


</div>




   
<button onClick={dropdown} className="collapsible">No One Reads 
Profiles</button>
<div className="content">
  <p><b>The Problem:</b> Because of the superficial nature of most 
    dating apps, a lot of people don’t read profiles -
     it can even go as far as only looking at one picture 
     before left or right swiping.  This leads to tons of 
     mismatches, as people are only glancing at how you
      look and not paying attention to what makes you you. </p>
<br></br>
 <p><b>The Solution:</b> Instead of putting the task of judging 
  compatibility on the user, we plan to use our filtering
   system to match all users’ specifications. Those important 
   details about who you are will actually change who interacts 
   with you instead of sitting ignored in your profile 
   description. </p>


</div>


<button onClick={dropdown} className="collapsible">Is Anyone Online?
</button>
<div className="content">
  <p><b>The Problem:</b> There is never a way to see if the people that
     you’re interested in talking to are using the app, or even 
     if they’ve been active in the last year. This can make it
      feel like you are adrift in a sea of profiles that no one
       is using. </p>
<br></br>
 <p><b>The Solution:</b> This one is simple:  Showing you who is 
  online at the same time you are and by showing you the 
  last time a profile was used. Any profiles that go unused 
  for more than a week will be deactivated until they’re 
  signed into again, which means you will never be seeing 
  phantom profiles. </p>


</div>


<button onClick={dropdown} className="collapsible">There Are Kids 
on Here!</button>
<div className="content">
  <p><b>The Problem:</b> People under the age of 18 are mixed in with 
    adults on dating apps. </p>
<br></br>
 <p><b>The Solution:</b> An ID verification system that assures 
  that no one under the age of 18 can use our app. </p>


</div>


<button onClick={dropdown} className="collapsible">Low/Random 
Quality Connections</button>
<div className="content">
 <p><b>The Problem:</b> A dating app typically shows you everyone in
   a set area, rather than showing you people that are 
   compatible with you in any capacity. </p>
<br></br>
 <p><b>The Solution:</b> To give our users a filtering system where 
  they can rank qualities that are important to them, whether
   that be physical or personality driven. To read more about our two-way filtering system, see the “Limited Filters” tab! </p>


</div>




<button onClick={dropdown} className="collapsible">Swiping</button>
<div className="content">
<p><b>The Problem:</b> F*CK SWIPING! </p>
<br></br>
 <p><b>The Solution:</b> No MORE F*CKING SWIPING! At Koi, we've 
  revolutionized the way you find and view profiles. Our
   dating platform takes the form of a charming town, 
   with each building representing different relationship 
   goals. For instance, the BAR is for those seeking casual 
   relationships or hookups, while other buildings cater 
   to various relationship styles. Conversations in specific 
   areas make intentions clear, and the purpose of each area
    is reinforced upon entry. Inside buildings, you'll find 
    users matching your criteria for that area. When interested 
    in someone, our system checks for important missing 
    information flagged by the other person, ensuring 
    compatibility. If everything aligns, start chatting! 
    If not, you're protected from conversations that wouldn't
     go anywhere. If the conversation goes well, exchanging 
     in-app phone numbers is an option, and both users are 
     saved in each other's in-app phone book, effectively 
     becoming matches. This system allows individuals to 
     move at the pace they want, does not treat people 
     like objects, and gives users the space to talk 
     casually BEFORE any match is made.  </p>


</div>


<button onClick={dropdown} className="collapsible">Fake Profiles </button>
<div className="content">
<p><b>The Problem:</b> Dating apps will take random pictures of 
  attractive people and create fake profiles to make their
   apps look better and more exciting than they really are. </p>
<br></br>
 <p><b>The Solution:</b> At Koi we will only ever show real 
  and active profiles. No fake ones to make the user 
  pool look better… ever.  Each profile will also be 
  ID verified, so only 1 person is ever associated 
  with a single account.  Part of our overall goal at 
  Koi is 100% transparency. We want you to know exactly 
  who is online. Whether that number is small or large,
   you will have the REAL picture of who is in the dating pool. </p>


</div>


<button onClick={dropdown} className="collapsible">Creeps</button>
<div className="content">
 <p><b>The Problem:</b> Dating apps are swarming with creepy people
   who either want to take advantage of others or just send
    uncomfortable comments/pictures. </p>
<br></br>
 <p><b>The Solution:</b> A private user voting system, 
  where a certain amount of votes on someone will 
  give them a red flag icon on their profile. When
   clicked, this icon will tell you how many people 
   have complained of reportable behavior -- i.e. creepy, 
   aggressive, or a ghoster -see ghosting-. 
   If the unwanted behavior continues and votes pass a 
   certain threshold, this user will receive a ban from the app.  </p>


</div>


<button onClick={dropdown} className="collapsible">Catfish</button>
<div className="content">
<p><b>The Problem:</b> People get on dating apps and pretend to be
   someone they aren’t.  </p>
<br></br>
 <p><b>The Solution:</b> Everyone must capture at least 1 photo through
   the app of themselves - no filters and with no possibility 
   for editing. This combined with our user voting system 
   should eventually eliminate all catfish swimming in the 
   Koi pond. </p>


</div>


<button onClick={dropdown} className="collapsible">”Sales” People
</button>
<div className="content">
<p><b>The Problem:</b> Dating apps are notorious for people trying to
   sell services, products, nudes, pornography etc.  </p>
<br></br>
 <p><b>The Solution:</b> Koi’s user voting system effectively 
  filters out individuals misusing our app for such unintended 
  purposes. These users  won't be able to come back as their 
  activity will be associated with their  ID because of our 
  ID verification system. This approach not only discourages 
  salespeople but ensures that Koi can be enjoyed as intended
   by genuine users. </p>
 
</div>


<button onClick={dropdown} className="collapsible">No Idea What the
 Other Person is Into Sexually</button>
<div className="content">
<p><b>The Problem:</b> No other dating app has the option to privately 
  display your information about what you like in bed - you have
   to put it on blast publicly if you want potential partners 
   to know, which can lead to awkward situations if someone you
    know sees it. </p>
<br></br>
 <p><b>The Solution:</b> Within our filter system, Koi will
   include a blind search that matches some criteria 
   without displaying that information publicly. We’ll
    also have an area within the app for our kinky users
     - a masquerade-type search where you can see what people
      like sexually, but can only see their entire profile if
       you decide to chat privately. This protects the privacy 
       of our users while allowing them to explore their sexual
        sides simultaneously. </p>


</div>






<button onClick={dropdown} className="collapsible">Hook Ups? Serious
 Relationships? Both? </button>
<div className="content">
<p><b>The Problem:</b> People looking for different types of 
  connections are all mixed together making talking confusing 
  for everyone.  </p>
<br></br>
 <p><b>The Solution:</b> Allowing you the space to choose exactly 
  what you’re looking for whether that be a serious relationship,
   a hookup, friends with benefits, or even nonmonogamy and 
   letting you see everyone who is looking for the same thing 
   without the classic and repetitive “so what are you looking for?” 
   conversation. The various spaces within the app will also make it
    very clear what the users around you are looking for. Check out 
    the “what will Koi look like?” tab for more information on 
    these spaces.  </p>


</div>


<button onClick={dropdown} className="collapsible">Feeling Unrepresented</button>
<div className="content">
 <p><b>The Problem:</b> Dating apps don’t allow inclusive options for 
  less represented groups of people, such as polyamorous folks
   or kinky people.  </p>
<br></br>
 <p><b>The Solution:</b> Making Koi an all-inclusive app by giving 
  options for everyone, and also by allowing users to voice
   and vote on concerns for new features or future updates. 
   Whatever the unrepresented group is, Koi is dedicated to
    creating a space for these people to find what they might
     be looking for romantically or sexually.</p>


</div>




<button onClick={dropdown} className="collapsible">So Boring!</button>
<div className="content">
<p><b>The Problem:</b> It’s no secret that almost every dating app
   follows the same formula - see pictures, glance at words,
    skip or like. Not to mention that most of them are just
     mindless swiping, completely taking all the possible 
     fun out of dating online. </p>
<br></br>
 <p><b>The Solution:</b> We are switching things up and creating
   an interactive fun space with much more to do, explore,
    and play with.  We want to create a space that puts the
     fun back in functional. (sorry … we couldn't help ourselves)</p>


</div>







<button onClick={dropdown} className="collapsible">Selling user 
Data</button>
<div className="content">
<p><b>The Problem:</b> Dating apps, like many other apps, sell user 
  data as part of their income stream. </p>
<br></br>
 <p><b>The Solution:</b> Simple… Your data will never be sold.
   Ever. We will also never allow our company to go public
    or be bought out for any reason, thereby ensuring that 
    your data is protected and safe forever.   </p>


</div>








<button onClick={dropdown} className="collapsible">What 
Will Koi Look Like?</button>
<div className="content">
 <p> Koi will be designed to look like a cartoon town.
   Each building will be hand-designed to reflect : our
    plan for enterable buildings include a bar for casual
     relationships, a coffee shop for serious connections,
      a kinky club for those prioritizing sexual needs while
       maintaining user privacy, an event center for
        activities like speed dating, a community building 
        for user voting on new features, a library for reading 
        Koi-written articles on dating advice, and a few others 
        that we’re still finalizing ideas on. When you enter a 
        place, you’ll have a clickable avatar for other players
         to interact with, but we haven’t decided on the look or
          mobility of these avatars yet. </p>


</div>


<button onClick={dropdown} className="collapsible">I Don’t Like the Sound of a Little Town Type of Dating App… </button>
<div className="content">
 <p> If you don’t like the sound of an interactive, 
  town-modeled dating app, we’ll have a button to show a
   grid-view of users to look through. They’ll still have
    all of the perks of our filtering options and areas, 
    but you will see a more traditional looking app. </p>


</div>


<button onClick={dropdown} className="collapsible">What 
if I'm Not Particular?</button>
<div className="content">
  <p>With Koi's two-way search system, you have the 
    flexibility to see everyone who might be interested 
    in you, even if you're not actively seeking anything 
    specific. If you prefer to explore all potential matches
     without setting preferences, that's completely possible! 
     Just remember that while you may not have specific criteria,
      other users probably will. To interact with those users 
      and move beyond profile viewing, you'll be prompted to 
      provide the necessary information to determine your 
      compatibility with that person. However, if that is 
      still a problem, you can elect to only see people who 
      aren’t particular about what they are looking for either! </p>



</div>


<button onClick={dropdown} className="collapsible">What if 
I’m REALLY Particular?</button>
<div className="content">
  <p><b>The Problem:</b> You feel like you can’t find someone 
    because you’re really picky about the kind of person 
    that you want. </p>
<br></br>
 <p><b>The Solution:</b> Surprise, surprise, once again,
   the solution is our filtering system! By having 
   all of the options available to list, you’ll only 
   ever see people who fit with your needs and specifications.
    That way, no one’s time gets wasted. Even if you’re 
    seeing a lot less people, they’ll always match up with 
    whatever details you list. </p>


</div>


<button onClick={dropdown} className="collapsible">What 
About People Changing Their Qualities or Interests Constantly?</button>
<div className="content">
  <p>People will not be able to update their own qualities
     or interests more than once a month, meaning that if
      they answer a question that disqualifies them from a
       person’s profile that they really wanted to see, they
        can’t go back immediately to change it so they can 
        talk to that person. This ensures honesty and keeps
         Koi focused on matching people based on compatibility 
         for users who are looking for that. However, you are 
         allowed to change what you are looking for at any 
         time and as much as you’d like.</p>


</div>


          
        </div>
      </div>
    </div>
  );
};

export default About;
