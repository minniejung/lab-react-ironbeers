import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Header from "./../Components/Header";

const Beers = (props) => {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => {
        console.log(response);
        setBeers(response.data);
      })
      .catch((e) => console.log(e));
  }, []);

  // console.log(beers);

  return (
    <>
      <Header />
      <div className="container">
        {beers.map((beer) => {
          const id = String(beer._id);
          return (
            <Link to={id}>
              <div className="beersDiv" key={beer._id}>
                <div className="beerImg">
                  <img src={beer.image_url} alt=""/>
                </div>
                <div className="beerInfo">
                  <h2>{beer.name}</h2>
                  <h3 className="beerTag">{beer.tagline}</h3>
                  <p className="beerCountry">
                    <b>Created by :</b> {beer.contributed_by}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Beers;
