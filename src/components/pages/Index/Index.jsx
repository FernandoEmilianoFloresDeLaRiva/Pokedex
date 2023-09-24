import React, { useContext } from "react";
import Home from "../../templates/Home/Home";
import Modal from "../../templates/Modal/Modal";
import { PokemonContext } from "../../../context/PokemonContext";
import "./Index.css";

function Index() {
  const { abrirModal, pokemon } = useContext(PokemonContext);
  return (
    <div className="index">
      <Home />
      {abrirModal && <Modal pokemon={pokemon}/>}
    </div>
  );
}

export default Index;
