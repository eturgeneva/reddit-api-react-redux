import React from 'react';
import './App.css';
import Header from './components/Header.js';
import Timeline from './components/Timeline.js';
import Subreddits from './components/Subreddits.js';

function App() {
  return (
    <>
      <Header />
      <main>
        <Timeline />
        <Subreddits />
      </main>
    </>
  );
}

export default App;
