import React from "react";
import TypesNav from "../../moleculas/TypesNav/TypesNav";
import "./Header.css";

function Header({ funcion, types}) {
  return (
    <header>
      <h1 className="logo-pokemon">Pokédex</h1>
      <TypesNav funcion={funcion} types={types}/>
    </header>
  );
}

export default Header;
