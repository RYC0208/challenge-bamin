import React, { Suspense } from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RestaurantPage from "./pages/RestaurantPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/restaurants/:id" element={<RestaurantPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

const LayOut = () => {
  return (
    // <Suspense fallback={<>loading...</>}>
    <>
      <Outlet />
    </>

    // </Suspense>
  );
};

export default Router;
