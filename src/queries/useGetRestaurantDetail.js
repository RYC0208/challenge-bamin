import { useSuspenseQuery } from "@tanstack/react-query";
import React from "react";

const useGetRestaurantDetail = () => {
  return useSuspenseQuery({
    queryKey: [],
  });
};

export default useGetRestaurantDetail;
