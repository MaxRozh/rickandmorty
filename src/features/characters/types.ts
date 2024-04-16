export interface IFetchCharactersResultItem {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: { name: string; url: string };
  location: { name: string; url: string };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface IFetchCharacters {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: null | string;
  };
  results: IFetchCharactersResultItem[];
}

export interface ICharactersItem {
  id: number;
  name: string;
  status: string;
  species: string;
  originName: string;
  img: string;
  createdAt: string;
  episodesAmount: number;
}
