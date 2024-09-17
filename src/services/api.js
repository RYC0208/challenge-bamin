const BASE_URL = "http://localhost:3000";

const getRestaurants = async () => {
  const response = await fetch(`${BASE_URL}/restaurants`);
  const data = await response.json();
  return data;
};

const api = {
  getRestaurants,
};

export default api;
