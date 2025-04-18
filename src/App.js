import React from 'react';
import { Route, createBrowserRouter, RouterProvider, createRoutesFromElements } from 'react-router-dom';
import './App.css';

// Routing:
import Homepage from './components/Homepage.js';
import { Reddit } from './reddit.js';
import ArticlePreviews from './features/ArticlePreviews.js';
import CurrentArticle from './components/CurrentArticle.js';
import SearchResultsDisplay from './components/SearchResultsDisplay.js';

const redditClient = new Reddit();

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={ <Homepage redditClient={redditClient}/> }>
    <Route path="/:subreddit?" element={ <ArticlePreviews redditClient={redditClient} /> } />
    <Route path="/:subreddit/search/" element={ <SearchResultsDisplay redditClient={redditClient} />}/>
    <Route path="/:subreddit/:articleId" element={ <CurrentArticle redditClient={redditClient} />}/>
  </Route>
));

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
