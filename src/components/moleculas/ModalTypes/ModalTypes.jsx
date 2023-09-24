import React from "react";
import SpanText from "../../atomos/SpanText/SpanText";
import TypeAtom from "../../atomos/TypeAtom/TypeAtom";
import "./ModalTypes.css";

function ModalTypes({ name }) {
  return (
    <>
      <TypeAtom name={name} />
      <SpanText clase="type-name" texto={name} />
    </>
  );
}

export default ModalTypes;
