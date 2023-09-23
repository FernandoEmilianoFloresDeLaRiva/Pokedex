import { useState, useEffect } from "react";
import { getTypes } from "../services/typesService";

export const useTypes = () => {
  const [loadingTypes, setLoading] = useState(false);
  const [types, setTypes] = useState([]);
  useEffect(() => {
    setLoading(true);
    getTypes()
      .then((res) => setTypes(res))
      .finally(() => setLoading(false));
  }, []);
  return { types, loadingTypes };
};
