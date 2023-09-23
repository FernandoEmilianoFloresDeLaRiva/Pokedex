import { apiGet } from "./api/api";
import { pokemons_URL } from "../constants/pokemon_URL";

export const getAllPokemons = async (limite = 6, page = 0 ) => {
  try {
    const res = apiGet(`${pokemons_URL}limit=${limite}&offset=${page * limite}`);
    return res;
  } catch (err) {
    console.error("Error fetching: ", err);
    throw err;
  }
};
