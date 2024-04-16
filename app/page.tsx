'use client';

import { useEffect, useState } from 'react';

import Header from 'components/header/Header';
import CharacterList from 'components/list/character/CharacterList';

import fetchCharacters from 'features/characters/service';
import characterMapper from 'features/characters/characterMapper';
import type { ICharactersItem } from 'features/characters/types';

function HomePage() {
  const [charactersList, setCharactersList] = useState<ICharactersItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const onFetchCharacters = async (name?: string) => {
    const dataList = await fetchCharacters({ name });
    setCharactersList(characterMapper(dataList));
    setIsLoading(false);
  };

  useEffect(() => {
    onFetchCharacters();
  }, []);

  return (
    <div>
      <Header isLoading={isLoading} onChange={(value) => onFetchCharacters(value)} />
      <CharacterList charactersList={charactersList} isLoading={isLoading} />
    </div>
  );
}

export default HomePage;
