export const apiGet = async (endpoint) => {
  const res = await fetch(endpoint);
  if(res.status !== 200) return null
  return res.json();
};
