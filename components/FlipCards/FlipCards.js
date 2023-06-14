import React from "react";
import FlipCard from "./FlipCard";
import { cards } from "./helpers";

const FlipCards = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: "0px",
        marginBottom: "100px",
        gap: "20px 30px",
        flexWrap: "wrap",
      }}
    >
      <div className="container">
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              marginTop: "50px",
              marginBottom: "100px",
              gap: "20px 30px",
              flexWrap: "wrap",
            }}
          >
            {cards.map((card) => (
              <FlipCard key={card.id} card={card} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCards;
