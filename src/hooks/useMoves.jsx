import { useEffect, useState } from "react";
import { apiGet } from "../services/api/api";
import { movesData } from "../utils/movesData";

export const useMoves = (movimientos) => {
  const [loading, setLoading] = useState(true);
  const [allMoves, setAllMoves] = useState([]);

  useEffect(() => {
    setLoading(true);
    const getMoves = async () => {
      const result = await Promise.all(
        movimientos.map(async ({ move }) => {
          const res = await apiGet(move.url);
          const { resMove } = await movesData(res);
          return { move: move.name, content: resMove };
        })
      );
      setAllMoves(result);
      setLoading(false);
    };
    getMoves();
  }, [movimientos]);

  return { allMoves, loading };
};
