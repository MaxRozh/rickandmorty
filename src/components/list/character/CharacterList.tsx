import React from 'react';

import VirtualizedList from 'components/list/virtualized/VirtualizedList';
import CharacterItem from 'components/list/character/item/CharacterItem';
import CharacterSkeleton from 'components/list/character/skeleton/CharacterSkeleton';

import type { ICharactersItem } from 'features/characters/types';

interface IProps {
  charactersList: null | ICharactersItem[];
  isLoading: boolean;
}

function CharacterList({ charactersList, isLoading }: Readonly<IProps>) {
  if (isLoading) return <CharacterSkeleton />;
  if (charactersList === null) return <h3>Something went wrong</h3>;

  return (
    <VirtualizedList<ICharactersItem>
      styleClassName="divide-y divide-secondary px-6"
      list={charactersList}
      Component={CharacterItem as React.FC}
    />
  );
}

export default CharacterList;
