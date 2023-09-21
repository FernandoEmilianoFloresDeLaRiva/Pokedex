import React, { useEffect, useState } from "react";
import { useImg } from "../../../hooks/useImg";

function TypeAtom({ name }) {
  const { img } = useImg(name);

  return <img alt={name} src={img} />;
}

export default TypeAtom;
