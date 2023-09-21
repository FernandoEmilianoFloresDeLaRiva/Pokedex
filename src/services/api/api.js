export const apiGet = async (endpoint) => {
  const res = await fetch(endpoint);
  return res.json();
};
