import React, { useEffect, useState } from "react";
import LikePlayerSection from "./LikePlayerSection";
import TikTok from "./TikTok";

const PlayerModal = ({
  setShowPlayerModal,

  displayedPlayer,
}) => {
  //   const shortDate = new Date(displayedPlayer.dob);
  //   const birthday = shortDate.toLocaleDateString();

  const [likePlayers, setLikePlayers] = useState([]);
  const [TikTokURL, setTikTokURL] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");

  //   let scoreString = "" + displayedPlayer?.score;
  //   scoreString = scoreString.slice(0, 5);

  const getLikePlayersTikTok = async () => {
    console.log("in GraphQL function");
    console.log("PLAYER ID: ", displayedPlayer._id);
    console.log("PLAYER NAME: ", displayedPlayer.short_name);
    const GRAPHQLENDPOINT = `https://us-east-1.aws.data.mongodb-api.com/app/atlassearchsoccergraphql-osuzx/endpoint/playerDetails?name=${displayedPlayer.short_name}`;
    const response = await (await fetch(GRAPHQLENDPOINT)).json();
    console.log("TIKTOK", response.data.player.tiktok_trends[1].video.playAddr);

    console.log("LIKE PLAYERS: ", response.data.player.likePlayers);
    setLikePlayers(response.data.player.likePlayers);
    setAuthor(response.data.player.tiktok_trends[1].author.nickname);
    setDescription(response.data.player.tiktok_trends[1].description);
    setTikTokURL(response.data.player.tiktok_trends[1].video.playAddr);
  };

  useEffect(() => {
    getLikePlayersTikTok();

    // eslint-disable-next-line
  }, []);

  return (
    <div className="fixed inset-0 z-20 p-20 flex justify-center bg-smoke-darkest">
      <div className="relative flex flex-col w-1/3 bg-gray-900 text-white border-r-2 border-slate-700 pt-5">
        {/* <div className="absolute -top-3 right-0 bg-red-600 rounded-full font-bold px-2 py-1  w-auto mx-auto">
          Search Score: {scoreString}
        </div> */}
        <div className="flex py-4 pl-2 pr-4">
          <div className="left flex flex-col w-1/2 justify-center items-center space-y-8">
            <img
              src={displayedPlayer.player_face_url}
              alt="player"
              className="object-contain w-1/2 rounded-full my-auto"
            />
            <div className="mx-auto text-2xl font-bold">
              {" "}
              {displayedPlayer.short_name}
            </div>

            <div className=" border border-green-400 rounded-full px-3  text-xl w-1/4 mx-auto text-center">
              {"Overall "}
              {displayedPlayer?.overall}
            </div>
          </div>
        </div>

        <div className="text-white text-2xl text-center mb-2">
          Scouting Report
        </div>
        <div className="text-center text-green-400 text-lg">
          Positions Played: {displayedPlayer.player_positions}
        </div>
        <div className="text-yellow-400 text-lg text-center px-20">
          {displayedPlayer?.player_traits}
        </div>
        <div
          className="absolute bottom-0 left-0 ml-3 mb-3"
          onClick={() => {
            setShowPlayerModal(false);
          }}
        >
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12"
            viewBox="0 0 20 20"
            fill="#ff0000"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div
          className="absolute bottom-0 right-0 mr-3 mb-3"
          onClick={() => {
            setShowPlayerModal(false);
          }}
        >
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12"
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
      </div>
      <LikePlayerSection players={likePlayers} />
      <div className="mx-2 ">
        <TikTok
          author={author}
          description={description}
          TikTokURL={TikTokURL}
        />
      </div>
    </div>
  );
};

export default PlayerModal;
