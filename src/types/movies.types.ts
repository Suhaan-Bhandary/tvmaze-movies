export type MovieList = Movie[];

export type Movie = {
  score: number;
  show: Show;
};

export type Show = {
  id: number;
  url: string;
  name: string;
  type: string;
  language: Language;
  genres: string[];
  status: Status;
  runtime: number | null;
  averageRuntime: number | null;
  premiered: null | string;
  ended: null | string;
  officialSite: null | string;
  schedule: Schedule;
  rating: Rating;
  weight: number;
  network: Network | null;
  webChannel: Network | null;
  dvdCountry: null;
  externals: Externals;
  image: Image | null;
  summary: string;
  updated: number;
  _links: Links;
};

export type Links = {
  self: Nextepisode;
  previousepisode?: Nextepisode;
  nextepisode?: Nextepisode;
};

export type Nextepisode = {
  href: string;
};

export type Externals = {
  tvrage: null;
  thetvdb: number | null;
  imdb: null | string;
};

export type Image = {
  medium: string;
  original: string;
};

export enum Language {
  English = 'English',
  Japanese = 'Japanese',
}

export type Network = {
  id: number;
  name: string;
  country: Country | null;
  officialSite: null | string;
};

export type Country = {
  name: string;
  code: string;
  timezone: string;
};

export type Rating = {
  average: number | null;
};

export type Schedule = {
  time: string;
  days: string[];
};

export enum Status {
  Ended = 'Ended',
  InDevelopment = 'In Development',
  Running = 'Running',
}
