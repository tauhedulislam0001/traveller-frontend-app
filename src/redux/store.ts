import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { useDispatch } from "react-redux";
import { pokemonApi } from "./services/pokemon";

import rootReducer from "./reducers";
import { BlogApi } from "./services/blog/api";

export const store = configureStore({
  reducer: {
    rootReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    [BlogApi.reducerPath]: BlogApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      pokemonApi.middleware,
      BlogApi.middleware
    ),
});

setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
