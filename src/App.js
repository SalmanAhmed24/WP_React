import React from 'react';
import Navbar from "./components/navbar/navbar";
import Posts from "./components/posts/posts";
import SinglePost from './components/posts/singlePost';
import { Router } from "@reach/router"
function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Posts path="/" />
        <SinglePost path="/:id" />
      </Router>
    </div>
  );
}

export default App;
