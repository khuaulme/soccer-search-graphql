import React from "react";
import Trophy from "../images/cup.png";

const CountryCard = ({ nation }) => {
  return (
    <div className=" flex justify-center text-center shadow-xl p-4 text-white mt-2">
      <img
        src={Trophy}
        alt="WorldCup"
        className="rounded-lg mx-auto w-16 object-contain mb-4"
      ></img>
      <div className="w-3/4 ">
        <div className="uppercase text-green-400 mb-2">{nation.country}</div>
        <div>{nation?.ChampionshipCount} Championships</div>
        <div>{nation?.FinalsCount} Finals</div>
        <div>{nation?.SemisCount} Semis</div>
        <div>{nation?.QuartersCount} Quarterfinals</div>
      </div>
    </div>
  );
};

export default CountryCard;
