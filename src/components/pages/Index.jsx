import React, { useState } from "react";
import Home from "../templates/Home/Home";
import Loading from "../atomos/Loading/Loading";
import { usePokemons } from "../../hooks/usePokemons";

function Index() {
  const [type, setType] = useState("fire");
  const { pokemonList, loading, types } = usePokemons(type);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Home funcion={setType} pokemons={pokemonList} typesNav={types} />
      )}
    </>
  );
}

export default Index;
