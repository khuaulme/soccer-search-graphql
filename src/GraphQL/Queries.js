import { gql } from "@apollo/client";

export const LOAD_PLAYERS = gql`
  query ($Input: String) {
    search(input: $Input) {
      club_jersey_number
      club_logo_url
      club_name
      long_name
      nation_flag_url
      nation_jersey_number
      overall
      player_face_url
      player_positions
      player_traits
      short_name
      nationality_name {
        country
        ChampionshipCount
        QuartersCount
        SemisCount
        FinalsCount
      }
    }
  }
`;
