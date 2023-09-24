import React from "react";
import "./Modal.css";
import ModalHeader from "../../organismos/ModalHeader/ModalHeader";
import PokemonNav from "../../moleculas/PokemonNav/PokemonNav";

function Modal({ pokemon }) {
  return (
    <div className={`modal ${pokemon.types[0].name}`}>
      <ModalHeader pokemon={pokemon} />
      <PokemonNav pokemon={pokemon} />
    </div>
  );
}

export default Modal;
