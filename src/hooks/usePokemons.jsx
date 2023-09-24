import { useEffect, useState } from "react";
import { getPokemonType } from "../services/pokemonTypeService";
import { particularPokemon } from "../services/pokemonParticularService";
import { pokemonData } from "../utils/pokemonData";
import { getAllPokemons } from "../services/pokemonAll";
import { scrollAray } from "../utils/scrollAray";

export const usePokemons = (type, all, visible) => {
  const [loadingMoreTypes, setLoadingMoreTypes] = useState(false);
  const [inicio, setInicio] = useState(0);
  const [page, setPage] = useState(0);
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  useEffect(() => {
    if ((type === "" && all) || loadingMoreTypes || !visible) return;
    if (page === 0 && inicio === 0) setPokemonList([]);
    if (visible && !loadingMoreTypes) {
      async function getPokemons() {
        try {
          setLoading(true);
          setLoadingMoreTypes(true);
          const pokemons = await getPokemonType(type);
          const res = await scrollAray(pokemons, inicio);
          const result = res.map(async ({ pokemon }) => {
            const res = await particularPokemon(pokemon.url);
            return pokemonData(res);
          });
          const resolvePokemon = await Promise.all(result);
          setPokemonList((prev) => [...prev, ...resolvePokemon]);
          setInicio((prev) => prev + 1);
          setLoading(false);
          setLoadingMoreTypes(false);
        } catch (error) {
          console.error("Error al obtener los Pokémons:", error);
        }
      }
      getPokemons();
    }
  }, [type, visible]);

  useEffect(() => {
    if (!all || isLoadingMore) return;

    if (visible && !isLoadingMore) {
      setInicio(0);
      setIsLoadingMore(true);
      const getAllPokemonsFunction = async () => {
        try {
          const allPokemons = await getAllPokemons(page);
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

  return {
    pokemonList,
    loading,
    setPokemonList,
    isLoadingMore,
    setPage,
    setInicio,
  };
};
