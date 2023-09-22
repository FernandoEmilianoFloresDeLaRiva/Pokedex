import React from "react";
import TypesNav from "../../moleculas/TypesNav/TypesNav";
import "./Header.css";

function Header({ funcion, types, seeAll}) {
  return (
    <header>
      <h1 className="logo-pokemon">Pokédex</h1>
      <TypesNav funcion={funcion} types={types} seeAll={seeAll}/>
    </header>
  );
}

export default Header;
