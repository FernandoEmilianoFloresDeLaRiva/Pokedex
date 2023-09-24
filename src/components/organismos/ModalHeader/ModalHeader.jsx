import React, { useContext } from "react";
import { PokemonContext } from "../../../context/PokemonContext";
import BackButton from "../../atomos/BackButton/Button";
import PokemonTitles from "../PokemonTitles/PokemonTitles";
import Image from "../../atomos/ImagePokemon/Image";
import "./ModalHeader.css";

function ModalHeader({ pokemon }) {
  const { setAbrirModal } = useContext(PokemonContext);
  return (
    <div className={`modal-header`}>
      <div>
        <BackButton funcion={() => setAbrirModal(false)} />
        <div className="pokemon-content">
          <Image img={pokemon.img} name={pokemon.name} />
          <PokemonTitles pokemon={pokemon} />
        </div>
      </div>
    </div>
  );
}

export default ModalHeader;
