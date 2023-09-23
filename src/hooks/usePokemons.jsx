import { useEffect, useState } from "react";
import { getPokemonType } from "../services/pokemonTypeService";
import { particularPokemon } from "../services/pokemonParticularService";
import { pokemonData } from "../utils/pokemonData";
import { getAllPokemons } from "../services/pokemonAll";

export const usePokemons = (type, all, visible) => {
  const [page, setPage] = useState(0);
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  useEffect(() => {
    if (type === "" && all) return;

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
    if (!all || isLoadingMore) return;

    if (visible && !isLoadingMore) {
      setIsLoadingMore(true);
      const getAllPokemonsFunction = async () => {
        try {
          const allPokemons = await getAllPokemons(page);
          console.log(allPokemons);
          const results = allPokemons.results.map(async (pokemon) => {
            const res = await particularPokemon(pokemon.url);
            return pokemonData(res);
          });
          const resolveAllPokemons = await Promise.all(results);
          setPokemonList(resolveAllPokemons);
          setPage((prevPage) => prevPage + 1);
          setIsLoadingMore(false);
        } catch (err) {
          console.error("error consiguiendo los pokemons", err);
        }
      };
      getAllPokemonsFunction();
    }
  }, [all, visible, isLoadingMore, page]);

  return { pokemonList, loading, setPokemonList };
};
