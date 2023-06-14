import React from 'react';
import { useScrollShowElement } from '../hooks';

function Header (): JSX.Element {
  const isShown = useScrollShowElement();
  const shownClassName = isShown ? 'bg-white/[.85]' : 'bg-white';
  return (
    <header
      className={`fixed w-full left-0 top-0 z-10 p-5 drop-shadow-md ${shownClassName}`}
    >
      <h1 className="text-3xl font-bold">Netflix Clone</h1>
    </header>
  );
}

export default Header;
