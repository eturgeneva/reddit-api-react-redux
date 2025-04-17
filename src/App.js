import React from 'react';
import { Route, createBrowserRouter, RouterProvider, createRoutesFromElements } from 'react-router-dom';
import './App.css';
import Header from './components/Header.js';
import Timeline from './components/Timeline.js';
import Subreddits from './components/Subreddits.js';

// Routing:
import Homepage from './components/Homepage.js';
import { Reddit } from './reddit.js';
import ArticlePreviews from './features/ArticlePreviews.js';

const redditClient = new Reddit();

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={ <Homepage redditClient={redditClient}/> }>
    {/* <Route path="timeline" element ={<Timeline redditClient={redditClient}/>} /> */}
    <Route path="/TurtleFacts" element={ <ArticlePreviews redditClient={redditClient} subreddit='TurtleFacts'/> }/>
  </Route>
)

);

function App() {
  // const redditClient = props.redditClient;
  
  return (
    <RouterProvider router={router}/>

    // Previous
    // <>
    //   <Header />
    //   <main>
    //     <Timeline redditClient={props.redditClient}/>
    //     <Subreddits redditClient={props.redditClient}/>
    //   </main>
    // </>
  );
}

export default App;
