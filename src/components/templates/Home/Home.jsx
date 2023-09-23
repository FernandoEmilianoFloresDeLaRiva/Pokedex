import React, { useState } from "react";
import Header from "../../organismos/Header/Header";
import PokemonContainer from "../../organismos/PokemonContainer/PokemonContainer";
import { useTypes } from "../../../hooks/useTypes";
import Loading from "../../atomos/Loading/Loading";
import { useNearScreen } from "../../../hooks/useNearScreen";
import { usePokemons } from "../../../hooks/usePokemons";
import "./Home.css";

function Home() {
  const [type, setType] = useState("");
  const [all, setAll] = useState(true);
  const { types, loadingTypes } = useTypes();
  const { visible, elementRef } = useNearScreen();
  const { pokemonList, loading, setPokemonList } = usePokemons(
    type,
    all,
    visible
  );
  const setAllFunction = () => {
    setAll(true);
    setType("");
    setPokemonList([]);
  };
  const setPokemonTypes = (name) => {
    setType(name);
    setAll(false);
  };
  return (
    <div className="container-index">
      {loadingTypes ? (
        <Loading />
      ) : (
        <Header
          funcion={setPokemonTypes}
          types={types}
          seeAll={setAllFunction}
        />
      )}
      <main>
        {loading ? (
          <Loading />
        ) : (
          <PokemonContainer type={type} all={all} pokemonList={pokemonList} />
        )}
        <div ref={elementRef}></div>
      </main>
    </div>
  );
}

export default Home;
