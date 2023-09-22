import React from "react";
import Header from "../../organismos/Header/Header";
import PokemonContainer from "../../organismos/PokemonContainer/PokemonContainer";
import "./Home.css";

function Home({ funcion, pokemons, typesNav, seeAll }) {
  return (
    <div className="container-index">
      <Header funcion={funcion} types={typesNav} seeAll={seeAll}/>
      <main>
        <PokemonContainer pokemons={pokemons} />
      </main>
    </div>
  );
}

export default Home;
