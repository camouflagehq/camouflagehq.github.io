import React from 'react';

export interface HamburgerProps {
  url?: string;
}

export function Hamburger({ url }: HamburgerProps) {
  return (
    <button
      className="
        font-bold text-white
        p-3 rounded-full
        bg-gray-800 hover:opacity-75
        absolute bottom-0 left-0 m-5
        z-10"
      title={url && `You're browsing in Camouflage: ${url}`}
    >
      &nbsp;&nbsp;C&nbsp;&nbsp;
    </button>
  );
}
