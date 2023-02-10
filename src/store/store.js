import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "../app/api";
import themeReducer from "../app/themeSlice";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
