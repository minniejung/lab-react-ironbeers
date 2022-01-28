import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Beers from "./Pages/Beers";
import BeerDetail from "./Pages/BeerDetail";
import NewBeer from "./Pages/NewBeer";
import Error from "./Components/Error";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beers" element={<Beers />} />
        <Route path="/beers/:id" element={<BeerDetail />} />
        <Route path="/randomBeer" element={<BeerDetail />} />
        <Route path="/newBeer" element={<NewBeer />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
