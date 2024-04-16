import React from 'react';
import { Creepster } from 'next/font/google';
import classNames from 'classnames';

import 'config/styles/normalize.css';
import 'tailwindcss/tailwind.css';

const zen = Creepster({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
  variable: '--font-zen',
  style: ['normal']
});

export async function generateMetadata() {
  return {
    title: {
      default: 'Rick and Morty',
      template: `%s | Rick and Morty`
    },
    description: 'Rick and Morty'
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head title="Rick and Morty">
        <meta content="ie=edge" httpEquiv="x-ua-compatible" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="theme-color" content="#3b82f6" />
      </head>
      <body className={classNames(zen.className)}>{children}</body>
    </html>
  );
}
