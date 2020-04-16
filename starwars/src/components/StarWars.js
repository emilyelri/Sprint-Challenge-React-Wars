import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import StarWarsCard from "./StarWarsCard";

export default function StarWars() {
    const [people, setPeople] = useState([]);
    const [api, setApi] = useState("https://swapi.co/api/people/1/");

    const CardContainer = styled.div`
        display: flex;
        justify-content: space-around;
    `;
 
    useEffect(() => {
        axios.get(api)
        .then(response => {
            const next = response.data.next;
            console.log("Next Page: ", next);
            const prev = response.data.previous;
            console.log("Previous Page: ", prev);
            const results = response.data.response;
            console.log("Star Wars People", results);
            setPeople(results);
        })
        .catch(err => {
            console.log("These are not the droids you're looking for.", err);
        });
    }, []);
    
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