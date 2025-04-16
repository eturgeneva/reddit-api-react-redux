import React from 'react';
import './App.css';
import Header from './components/Header.js';
import Timeline from './components/Timeline.js';
import Subreddits from './components/Subreddits.js';

function App(props) {
  // const redditClient = props.redditClient;
  
  return (
    <>
      <Header />
      <main>
        <Timeline redditClient={props.redditClient}/>
        <Subreddits redditClient={props.redditClient}/>
      </main>
    </>
  );
}

export default App;
