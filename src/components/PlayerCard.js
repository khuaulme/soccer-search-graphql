import React from "react";

const PlayerCard = ({ player }) => {
  return (
    <div className="justify-center rounded-xl border border-slate-500 text-center shadow-xl p-6 text-white border-solid">
      <div className="">{player?.long_name}</div>
      <div className="flex justify-evenly mt-2">
        <img src={player?.nation_flag_url} className="w-8 " alt="flag"></img>
        <div>{player?.nationality_name._id}</div>
        <div>{player?.nation_jersey_number}</div>
      </div>
      <img
        src={player?.player_face_url}
        alt="player-face"
        className="rounded-full mt-1  mx-auto w-16"
      ></img>
      <div className="flex justify-evenly items-center mt-1">
        <img src={player?.club_logo_url} alt="flag" className="w-12"></img>
        <div>{player?.club_name}</div>
        <div>{player?.club_jersey_number}</div>
      </div>
      <div className=" border border-green-400 rounded-lg p-1 mb-2 w-auto mx-auto">
        {"Overall: "}
        {player?.overall}
      </div>
      <div className="">Positions: {player?.player_positions}</div>
    </div>
  );
};

export default PlayerCard;
