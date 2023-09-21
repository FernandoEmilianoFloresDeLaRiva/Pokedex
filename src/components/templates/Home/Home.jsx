import React, { useState } from "react";
import Header from "../../organismos/Header/Header";
import PokemonContainer from "../../organismos/PokemonContainer/PokemonContainer";
import "./Home.css";

function Home({ funcion, pokemons, typesNav }) {
  return (
    <div className="container-index">
      <Header funcion={funcion} types={typesNav} />
      <main>
        <PokemonContainer pokemons={pokemons} />
      </main>
    </div>
  );
}

export default Home;
