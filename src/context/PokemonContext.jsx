import { createContext, useState } from "react";

export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [pokemon, setPokemon] = useState({});
  const [abrirModal, setAbrirModal] = useState(false)
  return (
    <PokemonContext.Provider value={{ pokemon, setPokemon, abrirModal, setAbrirModal }}>
      {children}
    </PokemonContext.Provider>
  );
};
