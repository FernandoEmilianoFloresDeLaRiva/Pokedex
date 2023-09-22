import { apiGet } from "./api/api";
import { pokemons_URL } from "../constants/pokemon_URL";

export const getAllPokemons = async (limite , offset ) => {
  try {
    const res = apiGet(`${pokemons_URL}limit=${limite}&offset=${offset}`);
    return res;
  } catch (err) {
    console.error("Error fetching: ", err);
    throw err;
  }
};
