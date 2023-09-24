import { apiGet } from "./api/api";
import { species_URL } from "../constants/species_URL";

export const getURLEvolution = async (id) => {
  try {
    const { evolution_chain } = await apiGet(`${species_URL}${id}`);
    const url = evolution_chain.url;
    return url;
  } catch (err) {
    console.error("Error fetching: ", err);
    throw err;
  }
};
