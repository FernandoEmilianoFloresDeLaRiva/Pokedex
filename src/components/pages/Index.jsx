import React, { useState, Suspense } from "react";
import Home from "../templates/Home/Home";
import Loading from "../atomos/Loading/Loading";
import { usePokemons } from "../../hooks/usePokemons";

function Index() {
  const [type, setType] = useState("fire");
  const { pokemonList, loading, types } = usePokemons(type);
  return (
    <>
      {/* {loading ? (
        <Loading />
      ) : (
        <Home funcion={setType} pokemons={pokemonList} typesNav={types} />
      )} */}
      <Suspense fallback={<Loading />}>
        <Home funcion={setType} pokemons={pokemonList} typesNav={types} />
      </Suspense>
    </>
  );
}

export default Index;
