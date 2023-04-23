import headshot from "../../public/images/testImages/headshot.jpg";
import benHeadShot from "../../public/images/headshots/benHeadshot.jpg";
import corynneHeadShot from "../../public/images/headshots/corynneHeadshot.jpg";
import graceHeadShot from "../../public/images/headshots/graceHeadshot.jpg";
import wayneHeadShot from "../../public/images/headshots/waynesHeadshot.jpg";
import laurenHeadShot from "../../public/images/headshots/laurenHeadshot.jpg";
import treyHeadShot from "../../public/images/headshots/treyHeadshot.jpg";
import shannaHeadShot from "../../public/images/headshots/shannaHeadshot.jpg";

const headshotStyles = {
  height: "350px",
  width: "auto",
  objectFit: "cover",
};
const headshotWrapper = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
};
const heart = "<3";

export const cards = [
  {
    id: "1",
    variant: "click",
    front: (
      <div className="relative" style={headshotWrapper}>
        <img
          className="Yellow-border"
          src={benHeadShot.src}
          style={headshotStyles}
        />
        <h3 className="center-x yellow-square-footer">Ben</h3>
      </div>
    ),
    back: (
      <div style={{ height: "350px" }} className="orange-border">
        <p
          style={{
            padding: "20px",
            height: "300px",
            textAlign: "center",
            overflowY: "scroll",
          }}
        >
          <b>Ben Petsel (he / him)</b> is an unhinged crazy person. It is
          impossible to write him a bio because he does and likes so many things
          that it would take a lot more than a paragraph. Let&apos;s just say
          he&apos;s a really good programmer and leave it at that.
        </p>
        <h3 className="center-x orange-square-footer">Ben</h3>
      </div>
    ),
    color: "yellow",
  },
  {
    id: "2",
    variant: "click",
    front: (
      <div className="relative" style={headshotWrapper}>
        <img
          className="orange-border"
          src={corynneHeadShot.src}
          style={headshotStyles}
        />
        <h3 className="center-x orange-square-footer">Corynne</h3>
      </div>
    ),
    back: (
      <div style={{ height: "350px" }} className="Yellow-border">
        <p
          style={{
            padding: "20px",
            height: "300px",
            textAlign: "center",
            overflowY: "scroll",
          }}
        >
          <b>Corynne Moody (she/they)</b> is a queer web developer who has been
          coding for 3 years but her main love is collecting hobbies. Her latest
          conquest has been reading an absurd amount of gay books & learning to
          play the drums. She also loves watching celebrity interviews and
          sharks {heart}
        </p>
        <h3 className="center-x yellow-square-footer">Corynne</h3>
      </div>
    ),
    color: "orange",
  },
  {
    id: "3",
    variant: "click",
    front: (
      <div className="relative" style={headshotWrapper}>
        <img
          className="Yellow-border"
          src={graceHeadShot.src}
          style={headshotStyles}
        />
        <h3 className="center-x yellow-square-footer">Grace</h3>
      </div>
    ),
    back: (
      <div style={{ height: "350px" }} className="orange-border">
        <p
          style={{
            padding: "20px",
            height: "300px",
            textAlign: "center",
            overflowY: "scroll",
          }}
        >
          <b>Grace Newkirk (she / her</b>) is a writer, bartender, and
          self-proclaimed people person. Grace debuted her social talents by
          skyrocketing to TikTok fame in one day before abruptly deleting her
          account to assert dominance. Grace loves video games and playing in
          the woods. She is currently working on her first book.
        </p>
        <h3 className="center-x orange-square-footer">Grace</h3>
      </div>
    ),
    color: "yellow",
  },
  {
    id: "4",
    variant: "click",
    front: (
      <div className="relative" style={headshotWrapper}>
        <img
          className="orange-border"
          src={wayneHeadShot.src}
          style={headshotStyles}
        />
        <h3 className="center-x orange-square-footer">Wayne</h3>
      </div>
    ),
    back: (
      <div style={{ height: "350px" }} className="Yellow-border">
        <p
          style={{
            padding: "20px",
            height: "300px",
            textAlign: "center",
            overflowY: "scroll",
          }}
        >
          <b>Jon Wayne Uhlenhake (he / him)</b> is a queer mystic who loves
          seeking wisdom in tarot, astrology, nature, and connections. Also an
          astheticist (classic Libra), he uses his keen eye to curate beauty in
          the aspects of life that call to him. Poem-writing, playlist-making,
          and collaging are some of his favorite activities, alongside dancing
          and playing video games.
        </p>
        <h3 className="center-x yellow-square-footer">Wayne</h3>
      </div>
    ),
    color: "orange",
  },
  {
    id: "5",
    variant: "click",
    front: (
      <div className="relative" style={headshotWrapper}>
        <img
          className="Yellow-border"
          src={laurenHeadShot.src}
          style={headshotStyles}
        />
        <h3 className="center-x yellow-square-footer">Lauren</h3>
      </div>
    ),
    back: (
      <div style={{ height: "350px" }} className="orange-border">
        <p
          style={{
            padding: "20px",
            height: "300px",
            textAlign: "center",
            overflowY: "scroll",
          }}
        >
          <b>Saint Lavender (any / all)</b> is a full-time queer artist and
          occasional chaos magician who likes to feed their creativity via
          songwriting, poetry, mixed media, research, and everything in between.
          Her favorite pastimes include going on wikipedia deep dives, copy
          editing (yes, really), and working on her next album. You can find
          Saint&apos;s music{" "}
          <a href="https://saintlavender.myportfolio.com/my-music">here</a>.
        </p>
        <h3 className="center-x orange-square-footer">Lauren</h3>
      </div>
    ),
    color: "yellow",
  },
  {
    id: "6",
    variant: "click",
    front: (
      <div className="relative" style={headshotWrapper}>
        <img
          className="orange-border"
          src={treyHeadShot.src}
          style={headshotStyles}
        />
        <h3 className="center-x orange-square-footer">Trey</h3>
      </div>
    ),
    back: (
      <div style={{ height: "350px" }} className="Yellow-border">
        <p
          style={{
            padding: "20px",
            height: "300px",
            textAlign: "center",
            overflowY: "scroll",
          }}
        >
          <b>Trey Campbell (he / him)</b> is a bassist, cellist, songwriter, and
          arranger. A diehard gamer, Trey fell in love with video game
          soundtracks at a young age, which came in handy when co-writing the
          music for Koi. He&apos;s written music for video games and
          documentaries, arranged strings for other musicians— and he even has a
          debut album, Focal Points, dropping later this summer.
        </p>
        <h3 className="center-x yellow-square-footer">Trey</h3>
      </div>
    ),
    color: "orange",
  },
  {
    id: "7",
    variant: "click",
    front: (
      <div className="relative" style={headshotWrapper}>
        <img
          className="Yellow-border"
          src={shannaHeadShot.src}
          style={headshotStyles}
        />
        <h3 className="center-x yellow-square-footer">Shanna</h3>
      </div>
    ),
    back: (
      <div style={{ height: "350px" }} className="orange-border">
        <p
          style={{
            padding: "20px",
            height: "300px",
            textAlign: "center",
            overflowY: "scroll",
          }}
        >
          <b>Shanna Petsel (She/Her)</b> is a creative person at heart— and ever
          since she was little, she wanted to create art and avoid people. She
          lived in NYC for 8 years working as a bartender surrounded by people,
          and rarely got to create anything outside of cocktails. She left that
          life 3 years ago, and now she&apos;s a self-taught 3D-modeling artist
          who runs a 3D printing business out of Ben Petsel&apos;s (mentioned
          above) childhood bedroom and life is good. Shanna also aspires to pet
          every single animal that exists— even the scary ones.
        </p>
        <h3 className="center-x orange-square-footer">Shanna</h3>
      </div>
    ),
    color: "yellow",
  },
];
