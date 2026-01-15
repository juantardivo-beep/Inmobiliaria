import { configureStore } from "@reduxjs/toolkit";
import propertyFiltersReducer from "./propertyFilterSlice";
import propertiesReducer from "./propertiesSlice"

export const store = configureStore({
  reducer: {
    propertyFilters: propertyFiltersReducer,
    properties: propertiesReducer
  },
});
