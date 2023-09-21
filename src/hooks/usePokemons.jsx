import { useEffect, useState } from "react";
import { getPokemonType } from "../services/pokemonTypeService";
import { particularPokemon } from "../services/pokemonParticularService";
import { pokemonData } from "../utils/pokemonData";
import { getTypes } from "../services/typesService";

export const usePokemons = (type) => {
  const [pokemonList, setPokemonList] = useState([]);
  const [types, setTypes] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    async function getPokemons() {
      try {
        const pokemons = await getPokemonType(type);
        const result = pokemons.map(async ({ pokemon }) => {
          const res = await particularPokemon(pokemon.url);
          return pokemonData(res);
        });
        const resolvePokemon = await Promise.all(result);
        setPokemonList(resolvePokemon);
        setLoading(false);
      } catch (error) {
        console.error("Error al obtener los Pokémons:", error);
      }
    }
    getPokemons();
  }, [type]);

  useEffect(() => {
    setLoading(true);
    getTypes()
      .then((res) => setTypes(res))
      .finally(() => setLoading(false));
  }, []);

  return { pokemonList, loading, types };
};
