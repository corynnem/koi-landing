import headshot from "../../public/images/testImages/headshot.jpg";

const headshotStyles = {
  height: "40vh",
  width: "auto",
};
const headshotWrapper = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
};

export const cards = [
  {
    id: "1",
    variant: "click",
    front: (
      <div className="relative" style={headshotWrapper}>
        <img
          className="Yellow-border"
          src={headshot.src}
          style={headshotStyles}
        />
        <h3 className="center-x yellow-square-footer">Ben</h3>
      </div>
    ),
    back: (
      <div style={{ height: "350px" }} className="orange-border">
        <p style={{ padding: "20px", textAlign: "center" }}>
          Meet Jane Smith, a freelance writer based in NYC with a journalism
          degree. She creates engaging content for a variety of clients and
          enjoys exploring the city's arts scene and volunteering at a local
          literacy program. Her goal is to continue to grow as a writer and
          bring unique voices to the world.
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
          src={headshot.src}
          style={headshotStyles}
        />
        <h3 className="center-x orange-square-footer">Corynne</h3>
      </div>
    ),
    back: (
      <div style={{ height: "350px" }} className="Yellow-border">
        <p style={{ padding: "20px", textAlign: "center" }}>
          Meet Jane Smith, a freelance writer based in NYC with a journalism
          degree. She creates engaging content for a variety of clients and
          enjoys exploring the city's arts scene and volunteering at a local
          literacy program. Her goal is to continue to grow as a writer and
          bring unique voices to the world.
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
          src={headshot.src}
          style={headshotStyles}
        />
        <h3 className="center-x yellow-square-footer">Grace</h3>
      </div>
    ),
    back: (
      <div style={{ height: "350px" }} className="orange-border">
        <p style={{ padding: "20px", textAlign: "center" }}>
          Meet Jane Smith, a freelance writer based in NYC with a journalism
          degree. She creates engaging content for a variety of clients and
          enjoys exploring the city's arts scene and volunteering at a local
          literacy program. Her goal is to continue to grow as a writer and
          bring unique voices to the world.
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
          src={headshot.src}
          style={headshotStyles}
        />
        <h3 className="center-x orange-square-footer">Wayne</h3>
      </div>
    ),
    back: (
      <div style={{ height: "350px" }} className="Yellow-border">
        <p style={{ padding: "20px", textAlign: "center" }}>
          Meet Jane Smith, a freelance writer based in NYC with a journalism
          degree. She creates engaging content for a variety of clients and
          enjoys exploring the city's arts scene and volunteering at a local
          literacy program. Her goal is to continue to grow as a writer and
          bring unique voices to the world.
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
          src={headshot.src}
          style={headshotStyles}
        />
        <h3 className="center-x yellow-square-footer">Lauren</h3>
      </div>
    ),
    back: (
      <div style={{ height: "350px" }} className="orange-border">
        <p style={{ padding: "20px", textAlign: "center" }}>
          Meet Jane Smith, a freelance writer based in NYC with a journalism
          degree. She creates engaging content for a variety of clients and
          enjoys exploring the city's arts scene and volunteering at a local
          literacy program. Her goal is to continue to grow as a writer and
          bring unique voices to the world.
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
          src={headshot.src}
          style={headshotStyles}
        />
        <h3 className="center-x orange-square-footer">Trey</h3>
      </div>
    ),
    back: (
      <div style={{ height: "350px" }} className="Yellow-border">
        <p style={{ padding: "20px", textAlign: "center" }}>
          Meet Jane Smith, a freelance writer based in NYC with a journalism
          degree. She creates engaging content for a variety of clients and
          enjoys exploring the city's arts scene and volunteering at a local
          literacy program. Her goal is to continue to grow as a writer and
          bring unique voices to the world.
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
          src={headshot.src}
          style={headshotStyles}
        />
        <h3 className="center-x yellow-square-footer">Shanna</h3>
      </div>
    ),
    back: (
      <div style={{ height: "350px" }} className="orange-border">
        <p style={{ padding: "20px", textAlign: "center" }}>
          Meet Jane Smith, a freelance writer based in NYC with a journalism
          degree. She creates engaging content for a variety of clients and
          enjoys exploring the city's arts scene and volunteering at a local
          literacy program. Her goal is to continue to grow as a writer and
          bring unique voices to the world.
        </p>
        <h3 className="center-x orange-square-footer">Shanna</h3>
      </div>
    ),
    color: "yellow",
  },
];
