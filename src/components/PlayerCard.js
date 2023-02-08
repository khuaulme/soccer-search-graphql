import React, { useEffect, useState } from "react";
import CountryCard from "./CountryCard";

const PlayerCard = ({
  player,
  setShowPlayerModal,
  displayedPlayer,
  setDisplayedPlayer,
}) => {
  // if (!player.nation_jersey_number) player.nation_jersey_number = 0;
  console.log("IN PLAYER CARD", player.nationality_name);
  const country = player.nationality_name;
  const [stats, setStats] = useState("");
  const API = `https://us-east-1.aws.data.mongodb-api.com/app/atlassearchsoccergraphql-osuzx/endpoint/countryStats?country=${country}`;

  const getCountryStats = async (country) => {
    const response = await (await fetch(API)).json();
    setStats(response);
    console.log(response);
    console.log("PCRES");
  };
  useEffect(() => {
    getCountryStats();

    // eslint-disable-next-line
  }, []);

  if (!player.club_jersey_number) player.club_jersey_number = 0;

  if (!player.player_face_url) player.player_face_url = "";
  if (!player.nationality_name) player.nationality_name = "France";

  return (
    <div className="relative justify-center rounded-xl border border-slate-500 text-center shadow-xl p-6 text-white border-solid">
      <div className="">{player?.long_name}</div>
      <div className="flex justify-evenly mt-2">
        <img src={player?.nation_flag_url} className="w-8 " alt="flag"></img>
        <div>{player.nationality_name?.country}</div>
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
      <div className="mb-4">Positions: {player?.player_positions}</div>
      <hr
        style={{
          color: "green",
          backgroundColor: "green",
          height: 2,
          borderColor: "green",
        }}
      />
      <CountryCard nation={player.nationality_name} stats={stats} />
      <div className="mt-6 w-4/5 mx-auto ">
        {" "}
        <div
          className="absolute bottom-0 left-0"
          onClick={() => {
            setShowPlayerModal(true);
            console.log("ID", player._id);
            setDisplayedPlayer(player);
            console.log("DISPLAY: ", player);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 z-10"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9 9a2 2 0 114 0 2 2 0 01-4 0z" />
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a4 4 0 00-3.446 6.032l-2.261 2.26a1 1 0 101.414 1.415l2.261-2.261A4 4 0 1011 5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="absolute bottom-0 right-0 flex items-end">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10"
            viewBox="0 0 20 20"
            fill="#00ED64"
          >
            <path
              fillRule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>{" "}
    </div>
  );
};

export default PlayerCard;
