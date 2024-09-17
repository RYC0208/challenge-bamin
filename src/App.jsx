import React, { Suspense } from "react";
import Router from "./Router";
import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<>loading...</>}>
        <Router />
      </Suspense>
    </QueryClientProvider>
  );
};

export default App;
