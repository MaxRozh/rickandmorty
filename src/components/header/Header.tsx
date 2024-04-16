import React, { ChangeEvent, useCallback, useRef } from 'react';
import Link from 'next/link';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

interface IProps {
  isLoading: boolean;
  onChange: (value: string) => void;
}

function Header({ isLoading, onChange }: Readonly<IProps>) {
  const debounceId = useRef<undefined | Timeout>(undefined);
  const onInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      clearTimeout(debounceId.current);

      if (e.target.value.length !== 1 && !isLoading) {
        debounceId.current = setTimeout(() => {
          onChange(e.target.value);
        }, 500);
      }
    },
    [isLoading]
  );

  return (
    <nav className="border-gray-200 bg-primary">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center whitespace-nowrap text-2xl font-semibold text-white">Rick And Morty</span>
        </Link>
        <div className="flex md:order-2">
          <div className="relative md:block">
            <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
              <MagnifyingGlassIcon className="z-10 size-4 text-primary" />
              <span className="sr-only">Search icon</span>
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 ps-10 text-sm text-gray-900 focus:border-secondary focus:ring-secondary disabled:pointer-events-none"
              placeholder="Search..."
              onChange={onInputChange}
              disabled={isLoading}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
