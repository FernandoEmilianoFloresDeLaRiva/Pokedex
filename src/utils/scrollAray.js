export const scrollAray = (arreglo, inicio = 0) => {
  if (inicio !== 0) {
    if (arreglo.length < inicio * 6) return [];
  }
  const indexInicio = inicio * 6;
  const res = arreglo.slice(indexInicio, indexInicio + 6);
  return res;
};
