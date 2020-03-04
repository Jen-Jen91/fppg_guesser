export interface Fixture {
  away_team: {
    score: number;
    team: {
      _members: string[];
      _ref: string;
    };
  };
  home_team: {
    score: number;
    team: {
      _members: string[];
      _ref: string;
    };
  };
  id: number;
  sport: string;
  start_date: string;
  status: string;
}

export interface Team {
  city: string;
  code: string;
  full_name: string;
  id: string;
  name: string;
}

export interface Player {
  first_name: string;
  fixture: {
    _members: string[];
    _ref: string;
  };
  fppg: number;
  id: string;
  images: {
    default: {
      height: number;
      url: string;
      width: number;
    };
  };
  injured: boolean;
  injury_details: string;
  injury_status: string;
  last_name: string;
  news: {
    latest: string;
  };
  played: number;
  player_card_url: string;
  position: string;
  removed: boolean;
  salary: number;
  starting_order: string;
  team: {
    _members: string[];
    _ref: string;
  };
}

export interface APIData {
  _meta: {
    _primary_document: string;
    players: {
      count: number;
    };
  };
  fixtures: Fixture[];
  players: Player[];
  teams: Team[];
}

export interface MainPlayerData {
  firstName: string;
  lastName: string;
  imageUrl: string;
  fppg: number;
}
