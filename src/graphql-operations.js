import gql from "graphql-tag";

export const FIND_PLAYER = gql`
  query {
    players22(query: $query) {
      short_name
    }
    searchPlayers(input: "Mbappe") {
      short_name
      nationality_name {
        ChampionshipCount
        FinalsCount
        QuartersCount
        SemisCount
        _id
        count
      }
    }
  }
`;
