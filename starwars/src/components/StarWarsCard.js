import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

export default function StarWarsCard(props) {
    const homeworld = props.homeworld;
    const species = props.species;
    const [planet, setPlanet] = useState("");
    const [specs, setSpecs] = useState("");

    const Card = styled.div`
    background-color: white;
    width: 30%;
    padding: 30px 15px;
    margin: 100px 30px 50px;
    border: 1px solid silver;
    border-radius: 10px;
    `;

    useEffect(() =>
        axios.get(homeworld).then(response => {
            const result = response.data.name;
            setPlanet(result);
        })
        .catch(err => {
            console.log("Homeworld request failed.", err)}),

        axios.get(species)
        .then(response => {
            const result = response.data.name;
            setSpecs(result);
        })
        .catch(err =>{
            console.log("Species request failed.", err);
        }), [props])

    return (
        <Card>
            <h2>{props.name}</h2>
            <p>Species: {specs}</p>
            <p>Homeworld: {planet}</p>
            <p>Gender: {props.gender}</p>
            <p>Born {props.birth_year}</p>
            <h3>Appearance</h3>
            <p>Hair Color: {props.hair}</p>
            <p>Eye Color: {props.eyes}</p>
            <p>Skin Color: {props.skin}</p>
            <p>Height: {props.height}</p>
            <p>Mass: {props.mass}</p>
        </Card>
    );
}