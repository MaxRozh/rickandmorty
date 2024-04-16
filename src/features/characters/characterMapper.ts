import { IFetchCharactersResultItem, ICharactersItem } from './types';

const characterMapper = (data: IFetchCharactersResultItem[] | null): ICharactersItem[] => {
  if (data === null) return [];

  return data.map((item) => ({
    id: item.id,
    name: item.name,
    status: item.status,
    species: item.species,
    originName: item.origin.name,
    img: item.image,
    createdAt: item.created,
    episodesAmount: item.episode.length
  }));
};

export default characterMapper;
