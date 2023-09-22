import React, { useState, Suspense } from "react";
import Home from "../templates/Home/Home";
import Loading from "../atomos/Loading/Loading";
import { usePokemons } from "../../hooks/usePokemons";

function Index() {
  const [type, setType] = useState("");
  const { pokemonList, loading, types, setAll } = usePokemons(type);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Home funcion={setType} pokemons={pokemonList} typesNav={types} seeAll={() => setAll(true)}/>
      )}
    </>
  );
}

export default Index;
