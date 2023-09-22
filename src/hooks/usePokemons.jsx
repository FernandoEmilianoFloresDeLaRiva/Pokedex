import { useEffect, useState } from "react";
import { getPokemonType } from "../services/pokemonTypeService";
import { particularPokemon } from "../services/pokemonParticularService";
import { pokemonData } from "../utils/pokemonData";
import { getTypes } from "../services/typesService";
import { getAllPokemons } from "../services/pokemonAll";

export const usePokemons = (type, all, limit = 6, offset = 0) => {
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
    if (type === "" && all) return;
    getPokemons();
  }, [type]);

  useEffect(() => {
    setLoading(true);
    getTypes()
      .then((res) => setTypes(res))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    setLoading(true);
    async function getAllPokemonsFunction() {
      try {
        const allPokemons = await getAllPokemons(limit, offset);
        const results = allPokemons.results.map(async (pokemon) => {
          const res = await particularPokemon(pokemon.url);
          return pokemonData(res);
        });
        const resolveAllPokemons = await Promise.all(results);
        setPokemonList(resolveAllPokemons);
        setLoading(false);
      } catch (err) {
        console.error("error consiguiendo los pokemons", err);
      }
    }
    getAllPokemonsFunction();
  }, [all]);

  return { pokemonList, loading, types };
};
