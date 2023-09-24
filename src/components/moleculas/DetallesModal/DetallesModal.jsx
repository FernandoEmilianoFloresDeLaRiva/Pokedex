import React from "react";
import SpanText from "../../atomos/SpanText/SpanText";
import "./DetallesModal.css";

function DetallesModal({ categoria, texto }) {
  return (
    <div className="todos-detalles">
      <div className="detallesModal">
        <SpanText clase="categoria" texto={categoria} />
      </div>
      <div className="detallesModal">
        <SpanText texto={texto} />
      </div>
    </div>
  );
}

export default DetallesModal;
