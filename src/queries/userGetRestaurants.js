import { useSuspenseQuery } from "@tanstack/react-query";
import queryKey from "./queryKey.keys";
import api from "./../services/api";

// /restaurants

const useGetRestaurantsQuery = () => {
  return useSuspenseQuery({
    queryKey: queryKey.default.restaurants,
    queryFn: api.getRestaurants,
  });
};

export default useGetRestaurantsQuery;
