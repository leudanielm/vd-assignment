export default async function fetch(...args) {
  const response = await window.fetch(...args);

  return await response.json();
};
