import React from "react";
import "./Movimientos.css";
import { useMoves } from "../../../hooks/useMoves";
import Contenido from "../../moleculas/ContenidoMovimiento/Contenido";
import Loading from "../../atomos/Loading/Loading";

function Movimientos({ movimientos }) {
  const { allMoves, loading } = useMoves(movimientos);
  return (
    <div className="container-moves">
      {loading ? (
        <Loading />
      ) : (
        allMoves.map((moves, indice) => {
          if (moves.content) {
            return (
              <Contenido
                key={indice}
                movimiento={moves.move}
                detalles={moves.content}
              />
            );
          }
        })
      )}
    </div>
  );
}

export default Movimientos;
