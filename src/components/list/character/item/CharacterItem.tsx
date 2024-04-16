import React from 'react';
import Image from 'next/image';
import { differenceInDays } from 'date-fns/differenceInDays';
import { FaceSmileIcon, FaceFrownIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline';

import type { ICharactersItem } from 'features/characters/types';
import { CharacterStatusEnum } from 'constants/character';

interface IProps {
  item: ICharactersItem;
}

const IconByStatus = {
  [CharacterStatusEnum.ALIVE]: FaceSmileIcon,
  [CharacterStatusEnum.DEAD]: FaceFrownIcon,
  [CharacterStatusEnum.UNKNOWN]: QuestionMarkCircleIcon
};

function CharacterItem({ item }: Readonly<IProps>) {
  const Icon = IconByStatus[item.status];
  return (
    <li key={item.id} className="flex justify-between gap-x-6 py-5">
      <div className="flex min-w-0 gap-x-4">
        <Image className="flex-none rounded-xl bg-gray-50" width={96} height={96} src={item.img} alt={item.name} />
        <div className="min-w-0 flex-auto">
          <p className="text-xl leading-6 text-primary">Name: {item.name}</p>
          <p className="mt-1 truncate text-sm leading-5 text-primary">Origin: {item.originName}</p>
          <p className="mt-1 truncate text-sm leading-5 text-primary">Species: {item.species}</p>
          <p className="mt-1 truncate text-sm leading-5 text-primary">
            Created: {differenceInDays(new Date(), new Date(item.createdAt))} days ago
          </p>
        </div>
      </div>
      <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
        <p className="mt-1 text-sm leading-5 text-primary">Seen in: {item.episodesAmount} episodes</p>
        <div className="mt-1 flex items-center gap-x-1.5">
          <p className="text-sm leading-5 text-primary">
            Status: <Icon className="inline size-5 text-border" />
          </p>
        </div>
      </div>
    </li>
  );
}

export default CharacterItem;
