import React from "react";
import PlayerCard from "./PlayerCard";

const PlayerGrid = ({ players }) => {
  return (
    <div className="flex w-full justify-between pl-20 mb-2">
      <div className="grid grid-cols-4 gap-x-2 gap-y-4 p-2 mt-10 w-4/5">
        {players?.map((player, index) => (
          <PlayerCard key={index} player={player} />
        ))}
      </div>
    </div>
  );
};

export default PlayerGrid;
