import React from "react";
import Tile from "../tile/Tile";

const TileList = ({ list }) => {
  return (
    <div>
      {list.map((data, index) => (
        <Tile key={index} data={data} />
      ))}
    </div>
  );
};

export default TileList;
