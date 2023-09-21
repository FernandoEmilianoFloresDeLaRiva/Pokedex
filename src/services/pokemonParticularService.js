import { apiGet } from "./api/api";

export const particularPokemon = async (endpoint) => {
  try {
    const res = await apiGet(endpoint);
    return res;
  } catch (err) {
    console.error("Error fetching", err);
    throw err;
  }
};
