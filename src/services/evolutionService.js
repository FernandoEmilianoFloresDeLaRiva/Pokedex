import { apiGet } from "./api/api";
import { species_URL } from "../constants/species_URL";

export const getURLEvolution = async (id) => {
  try {
    const res = await apiGet(`${species_URL}${id}`);
    if (res) {
      const { evolution_chain } = res;
      const url = evolution_chain.url;
      return url;
    }
    return null;
  } catch (err) {
    console.error("Error fetching: ", err);
    throw err;
  }
};
