export const movesData = (movimiento) => {
  const { flavor_text_entries } = movimiento;
  if (flavor_text_entries && flavor_text_entries.length > 0) {
    const movimientoEs = flavor_text_entries.filter(
      (move) => move.language.name === "es" || move.language.name === "en"
    );
    if (movimientoEs.length > 0) {
      const move =
        movimientoEs[0].flavor_text ||
        movimientoEs[1].flavor_text ||
        movimientoEs[2].flavor_text;
      return {
        resMove: move,
      };
    }
  }
  return {
    resMove: "No se encontró información del pokemon para este movimiento.",
  };
};
