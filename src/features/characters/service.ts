import apiFetch from 'libs/api';

import type { IFetchCharacters, IFetchCharactersResultItem } from './types';

interface IParams {
  name?: string;
}

const fetchCharacters = async ({ name }: IParams = {}): Promise<IFetchCharactersResultItem[] | null> => {
  try {
    const url = `https://rickandmortyapi.com/api/character${name ? `?name=${name}` : ''}`;
    const { body } = await apiFetch<IFetchCharacters>({ url });

    if (body === null) return null;
    if (body.info.pages < 2) return body.results;

    // +2 - because we start from second page
    const pagesArr = Array.from(Array(body.info.pages - 1), (_, index) => ({ page: index + 2 }));
    const pagesList = await Promise.all(
      pagesArr.map(({ page }) => apiFetch<IFetchCharacters>({ url: `${url}${name ? '&' : '?'}page=${page}` }))
    );

    return pagesList.reduce(
      (acc, curItem) => {
        acc.push(...curItem.body?.results);
        return acc;
      },
      [...body.results]
    );
  } catch (e) {
    return null;
  }
};

export default fetchCharacters;
