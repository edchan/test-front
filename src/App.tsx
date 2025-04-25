import React, { useEffect } from 'react';
import TopBlock from './components/TopBlock/TopBlock';
import BottomBlock from './components/BottomBlock/BottomBlock';

const App: React.FC = () => {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A') {
        console.log('Clicked global link');
        // Optional: e.preventDefault(); if you don't want navigation
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div className="app">
      <TopBlock />
      <BottomBlock />
    </div>
  );
};

export default App;
