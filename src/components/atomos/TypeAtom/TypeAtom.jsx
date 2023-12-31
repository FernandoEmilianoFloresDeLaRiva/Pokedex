import React from "react";
import { useImg } from "../../../hooks/useImg";
import "./TypeAtom.css";

function TypeAtom({ name }) {
  const { img } = useImg(name);

  return <img alt={name} src={img} />;
}

export default TypeAtom;
