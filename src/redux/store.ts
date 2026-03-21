import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { useDispatch } from "react-redux";
import { pokemonApi } from "./services/pokemon";

import rootReducer from "./reducers";
import { BlogApi } from "./services/blog/api";
import { TourPackageApi } from "./services/tour_package/api";
import { AuthApi } from "./services/auth/api";
import authReducer from "./slices/authSlice"; // Import auth reducer

export const store = configureStore({
  reducer: {
    auth: authReducer, // Add auth reducer here
    rootReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    [BlogApi.reducerPath]: BlogApi.reducer,
    [TourPackageApi.reducerPath]: TourPackageApi.reducer,
    [AuthApi.reducerPath]: AuthApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      pokemonApi.middleware,
      BlogApi.middleware,
      TourPackageApi.middleware,
      AuthApi.middleware
    ),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>; // Add RootState type
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;