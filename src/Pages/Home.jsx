import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="homeMenuDiv">
      <Link to="/beers">
        <img src="beers.png" alt="" />
        <h1>Beers</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates,
          obcaecati omnis expedita eos magnam iste quasi illo! Nemo iusto saepe
          labore dolorem molestias repudiandae beatae. Id voluptatibus minima
          odio sunt?
        </p>
      </Link>
      <br></br>
      <Link to="/randomBeer">
        <img src="random-beer.png" alt="" />
        <h1>Random Beer</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates,
          obcaecati omn is expedita eos magnam iste quasi illo! Nemo iusto saepe
          labore dolorem molestias repudiandae beatae. Id voluptatibus minima
          odio sunt?
        </p>
      </Link>
      <br></br>
      <Link to="/newBeer">
        <img src="new-beer.png" alt="" />
        <h1>New Beer</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates,
          obcaecati omnis expedita eos magnam iste quasi illo! Nemo iusto saepe
          labore dolorem molestias repudiandae beatae. Id voluptatibus minima
          odio sunt?
        </p>
      </Link>
      <br></br>
    </div>
  );
};

export default Home;
