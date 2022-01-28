import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "./../Components/Header";

const BeerDetail = (props) => {
  const { id } = useParams();
  const [beer, setBeer] = useState({});

  useEffect(() => {
    if (id) {
      axios
        .get("https://ih-beers-api2.herokuapp.com/beers/" + id)
        .then(({ data }) => {
          setBeer(data);
        })
        .catch((e) => console.log(e));
    } else {
      axios
        .get("https://ih-beers-api2.herokuapp.com/beers/random")
        .then(({ data }) => {
          setBeer(data);
        })
        .catch((e) => console.error(e));
    }
  }, [id]);

  return (
    <>
      <Header />
      <div className="container">
        <div key={beer._id} clasName="oneBeer">
          <div className="oneBeerImg">
            <img src={beer.image_url} alt="" />
          </div>
          <div className="oneBeerDetail">
            <div className="left">
              <h1>{beer.name}</h1>
              <h3>{beer.tagline}</h3>
            </div>
            <div className="right">
              <h1>{beer.attenuation_level}</h1>
              <h3>{beer.first_brewed}</h3>
            </div>
            <p>{beer.description}</p>
            <h3>{beer.contributed_by}</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default BeerDetail;
