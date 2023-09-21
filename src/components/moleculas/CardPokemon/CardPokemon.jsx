import React from "react";
import SpanText from "../../atomos/SpanText/SpanText";
import Image from "../../atomos/ImagePokemon/Image";
import "./CardPokemon.css";
import TypeAtom from "../../atomos/TypeAtom/TypeAtom";

function CardPokemon({ types, number, nombre, img }) {
  return (
    <article className={`pokemon-card ${types[0].name}`}>
      <div>
        <div className="pokemon-title">
        <SpanText clase="id-number" texto={"#" + number} />
        <SpanText clase="pokemon-name" texto={nombre} />
        </div>
        <div className="types">
          {types.map(({ name }) => {
            return (
              <div key={name} className={name}>
                <TypeAtom name={name} />
                <SpanText clase="type-name" texto={name} />
              </div>
            );
          })}
        </div>
      </div>
      <Image img={img} name={nombre} />
    </article>
  );
}

export default CardPokemon;
