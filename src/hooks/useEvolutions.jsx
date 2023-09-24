import { useEffect, useState } from "react";
import { getURLEvolution } from "../services/evolutionService";
import { apiGet } from "../services/api/api";

export const useEvolutions = (id) => {
  const [loading, setLoading] = useState(true);
  const [pokemonEvolution, setPokemonEvolution] = useState([]);
  useEffect(() => {
    setLoading(true);
    const conseguirEvolucion = async () => {
      const url = await getURLEvolution(id);
      if (url) {
        const { chain } = await apiGet(url);
        const evolutions = await conseguirEvoluciones(chain);
        setPokemonEvolution(evolutions);
      } else {
        setPokemonEvolution([]);
      }
      setLoading(false);
    };
    conseguirEvolucion();
  }, [id]);
  return { pokemonEvolution, loading };
};

function conseguirEvoluciones(evolutionChain) {
  const { species, evolves_to } = evolutionChain;
  if (!evolves_to.length) {
    return [];
  }
  const evolutions = evolves_to.reduce((chain, evolution) => {
    return [
      {
        current: {
          name: species.name,
          image: getPokemonImage(species.url),
        },
        next: {
          name: evolution.species.name,
          image: getPokemonImage(evolution.species.url),
        },
      },
      ...conseguirEvoluciones(evolution),
    ];
  }, []);

  return evolutions;
}

const getPokemonImage = (url) => {
  const id = url.match(/\/(\d+)\//)[1];
  const isPokemonHasSvg = id < 650;
  const base = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other`;
  if (isPokemonHasSvg) {
    return `${base}/dream-world/${id}.svg`;
  }
  return `${base}/official-artwork/${id}.png`;
};
