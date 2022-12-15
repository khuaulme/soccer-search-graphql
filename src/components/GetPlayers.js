import React, { useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import { LOAD_PLAYERS } from "../GraphQL/Queries";

const GetPlayers = () => {
  const { error, loading, data } = useQuery(LOAD_PLAYERS);

  useEffect(() => {
    //  if (!submitted) return;
    console.log("IN GQL USE EFFECT");
    console.log("DATA:", data);

    // eslint-disable-next-line
  }, [data]);
  return <div>GetPlayers</div>;
};

export default GetPlayers;
