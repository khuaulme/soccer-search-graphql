import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import SearchIcon from "./images/Search.png";

// Import the MongoDB Realm Web SDK
import * as Realm from "realm-web";

// Connect to your MongoDB Realm app
const REALM_APP_ID = "worldcup2022-pzgui"; // e.g. myapp-abcde
const app = new Realm.App({ id: REALM_APP_ID });

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [submitted, setSubmitted] = useState(false);
  return (
    <div className="min-h-screen bg-black">
      <h2 className="text-center text-4xl text-white pt-12">
        Atlas GraphQL Soccer
      </h2>
      <h2 className="text-center text-xl text-green-400 pt-4 text-white pb-12">
        Find Your Players ⚽
      </h2>
      <div className="flex mx-auto w-3/5 justify-around items-center">
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          setSubmitted={setSubmitted}
        />
      </div>
    </div>
  );
}

export default App;
