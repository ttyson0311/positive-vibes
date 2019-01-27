import React from "react";
import Card from "./Card";

const CardList = ({ quotes }) => {
  return (
    <div>
      {quotes.map((item, i) => {
        return (
          <Card
            key={quotes[i].id}
            id={quotes[i].id}
            quote={quotes[i].quote}
            author={quotes[i].author}
          />
        );
      })}
    </div>
  );
};
export default CardList;
