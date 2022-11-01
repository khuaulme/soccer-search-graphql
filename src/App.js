import React, { useEffect, useState } from "react";
import PlayerGrid from "./components/PlayerGrid";
import SearchBar from "./components/SearchBar";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [players, setPlayers] = useState([]);
  const [showPlayerChoices, setShowPlayerChoices] = useState(false);

  const EndPoint =
    "https://us-east-1.aws.data.mongodb-api.com/app/worldcupgraphql-cxtzr/endpoint/searchGraphQL";

  const getPlayers = async () => {
    console.log("IN GETPLAYERS");
    let API = `${EndPoint}?name=$${searchTerm}`;

    const response = await (await fetch(API)).json();

    console.log("RESPONSE", response.data); // payload returns searchPlayers array - name of customResolver
    const playersJSON = response.data;
    // console.log(playersJSON);

    if (playersJSON) {
      setPlayers(playersJSON.search);
      console.log("SETTING SHOWING PLAYER CHOICES");
      console.log("PLAYERS", playersJSON.search);
      setShowPlayerChoices(true);
    }
  };

  useEffect(() => {
    if (!submitted) return;
    console.log("IN USE EFFECT");

    getPlayers();
    setSubmitted(false);

    // eslint-disable-next-line
  }, [submitted]);

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
            <PlayerGrid players={players} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
