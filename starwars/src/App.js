import React from "react";
import StarWars from "./components/StarWars";
import styled from "styled-components";

export default function App () {

  const AppContainer = styled.div`
    text-align: center;
    background-repeat: no-repeat;
    background-position: fixed;
    `;

  const Header = styled.span`
    color: white;
    margin: 0px 30px;
    padding: 30px;
    font-size: 2rem;
    text-shadow: 1px 1px 5px #fff;
  `;

  const Titlebar = styled.div`
    width: 100%;
    padding: 5px;
    margin-top: 0px;
    background-color: gray;
    position: fixed;
  `;

  return (
    <AppContainer>
      <Titlebar>
        <Header>React Wars</Header>
      </Titlebar>
      <StarWars />
    </AppContainer>
  );
}