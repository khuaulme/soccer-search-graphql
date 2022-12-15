import React, { useEffect, useState } from "react";
import { APP_ID } from "./index.js";
import { useQuery } from "@apollo/client";
import { LOAD_PLAYERS } from "./GraphQL/Queries";

import PlayerGrid from "./components/PlayerGrid";
import SearchBar from "./components/SearchBar";
import PlayerModal from "./components/PlayerModal";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [players, setPlayers] = useState([]);
  const [showPlayerChoices, setShowPlayerChoices] = useState(false);
  const [displayedPlayer, setDisplayedPlayer] = useState({});
  const [showPlayerModal, setShowPlayerModal] = useState(false);

  const { loading, data } = useQuery(LOAD_PLAYERS, {
    variables: { Input: searchTerm },
  });

  useEffect(() => {
    console.log("IN USE EFFECT");
    // if (!submitted) return;
    if (data) {
      console.log("DATA: ", data);
      setPlayers(data.search);
      console.log(data.search);
      setShowPlayerChoices(true);
      setSubmitted(false);
    }

    // eslint-disable-next-line
  }, [data]);

  return (
    <div className="min-h-screen bg-black">
      <h2 className="text-center text-4xl text-white pt-12">
        Atlas GraphQL Soccer
      </h2>
      <h2 className="text-center text-xl text-green-400 pt-4  pb-12">
        Find Your Players ⚽
      </h2>
      <div className="flex mx-auto w-3/5 justify-around items-center">
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          setSubmitted={setSubmitted}
        />
      </div>
      <hr
        style={{
          color: "green",
          backgroundColor: "green",
          height: 2,
          borderColor: "green",
        }}
      />

      <div className="px-12">
        {showPlayerChoices && (
          <>
            <PlayerGrid
              players={players}
              setDisplayedPlayer={setDisplayedPlayer}
              setShowPlayerModal={setShowPlayerModal}
            />
          </>
        )}
      </div>
      {showPlayerModal ? (
        <PlayerModal
          players={players}
          displayedPlayer={displayedPlayer} // displayedPlayer
          setShowPlayerModal={setShowPlayerModal}
        />
      ) : null}
    </div>
  );
}

export default App;
