import React from 'react';
import Routes from './pages/Routes';
import Navigation from './components/Navigation';

export default function App(): JSX.Element {
  return (
    <>
      <Navigation />
      <Routes />
    </>
  );
}
