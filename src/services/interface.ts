export interface Game {
  developer: string;
  freetogame_profile_url: string;
  game_url: string;
  genre: string;
  id: number;
  platform: string;
  publisher: string;
  release_date: string;
  short_description: string;
  thumbnail: string;
  title: string;
}

interface Screenshots {
  id: number;
  image: string;
}
interface Requirements {
  graphics: string;
  memory: string;
  os: string;
  processor: string;
  storage: string;
}

export interface SingleGame {
  description: string;
  developer: string;
  freetogame_profile_url: string;
  game_url: string;
  genre: string;
  id: number;
  platform: string;
  publisher: string;
  release_date: string;
  screenshots: Screenshots[];
  short_description: string;
  status: string;
  thumbnail: string;
  title: string;
  minimum_system_requirements: Requirements;
}

export interface AdvanceFilter {
  title: string;
  id: number;
  status: boolean;
  thumbnail: string;
  games: Game[];
}
