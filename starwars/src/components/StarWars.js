import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

import StarWarsCard from "./StarWarsCard";

export default function StarWars() {
  const [people, setPeople] = useState([]);
  const [api, setApi] = useState("https://swapi.co/api/people/1");

  //styled
  const CardContainer = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 80%;
    margin-left: 10%;
  `;

  useEffect(() => {
    axios
      .get(api)
      .then(response => {
        const results = response.data.results;
        // const next = response.data.next;
        // const prev = response.data.previous;
        console.log("Star Wars People", results);
        setPeople(results);
      })
      .catch(err => {
        console.log("These are not the droids you're looking for.", err);
      });
  }, [api]);

  return (
      people.map(person => {
          return (
                <StarWarsCard 
                key={person.name}
                name={person.name}
                species={person.species}
                homeworld={person.homeworld}
                gender={person.gender}
                birth_year={person.birth_year}
                hair={person.hair_color}
                eyes={person.eye_color}
                skin={person.skin_color}
                height={person.height}
                mass={person.mass}
                />
          )
      })
  )
}