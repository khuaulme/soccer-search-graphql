import gql from "graphql-tag";

export const LOAD_PLAYERS = gql`
  query GetPlayers($Input: String) {
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

export const GET_PLAYER_DETAILS = gql`
  query ($Nic: PlayerQueryInput) {
    player(query: $Nic) {
      _id
      club_name
      club_jersey_number
      player_face_url
      long_name
      nation_flag_url
      overall
      nationality_name {
        country
      }
      overall
      nation_jersey_number
      player_positions
      player_traits
      short_name
      skill_moves
      likePlayers {
        short_name
        nation_jersey_number
        nation_flag_url
        player_face_url
        player_traits
        player_positions
        nationality_name {
          country
        }
      }
      tiktok_trends {
        description
        author {
          nickname
        }
        video {
          playAddr
        }
      }
    }
  }
`;
