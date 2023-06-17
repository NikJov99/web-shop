export const fetchData = async (id = "") => {
  const baseUrl = "https://fakestoreapi.com/products/";
  const response = await fetch(`${baseUrl}${id}`);
  const data = await response.json();

  return data;
};
