import React from "react";
import "./App.css";
import Index from "./components/pages/Index";
import {PokemonProvider} from './context/PokemonContext'

function App() {
  return (
    <PokemonProvider>
       <Index/>
    </PokemonProvider>
  );
}

export default App;
