import { apiGet } from "./api/api";
import { types_URL } from "../constants/types_URL";

export const getTypes = async () => {
  try {
    const { results } = await apiGet(types_URL);
    const res = await results.filter(
      ({ name }) => name !== "unknown" && name !== "shadow"
    );
    return Promise.resolve(res);
  } catch (err) {
    console.error("Error fetching", err);
    throw err;
  }
};
