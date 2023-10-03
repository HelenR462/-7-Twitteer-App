import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomeMain";
import RandomTweet from "./components/RandomTweet/RandomTweet";
import RandomTweetCard from "./components/RandomTweet/RandomTweetCard";
import UserTweet from "./components/Tweets/UserTweet/UserTweet";
import UserTweetCard from "./components/Tweets/TweetCard/UserTweetCard";
import NoPage from "./components/NoPage";

function App() {
   const [data, setData] = useState([]);

  // Make HTTP Requests from React to Node

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <BrowserRouter>
        <div className="app">
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/RandomTweet" element={<RandomTweet />}></Route>
            <Route path="/RandomTweetCard" element={<RandomTweetCard />}></Route>
            <Route path="/UserTweet" element={<UserTweet 
            data={data}
            
            />}></Route>
            <Route path="/UserTweetCard" element={<UserTweetCard />}></Route>
            <Route path="*" element={<NoPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
