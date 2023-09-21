export const pokemonData = (pokemon) => {
  const { id, name, sprites, types } = pokemon;
  const newId = String(id).padStart(3, "0");
  const newTypes = types.map(({ type }) => type);
  const pokemonImg =
    sprites.other.dream_world.front_default ||
    sprites.other["official-artwork"].front_default;
  return {
    ...pokemon,
    types: newTypes,
    name,
    img: pokemonImg,
    id: newId,
  };
};
