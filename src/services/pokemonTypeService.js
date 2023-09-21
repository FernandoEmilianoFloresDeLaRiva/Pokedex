import { apiGet } from "./api/api";
import { pokemonType_URL } from "../constants/pokemonType_URL";

export const getPokemonType = async (type) => {
    try {
      const { pokemon } = await apiGet(`${pokemonType_URL}${type}`);
      return pokemon;
    } catch (err) {
      console.error("Error fetching", err);
      throw err;
    }
  };
  