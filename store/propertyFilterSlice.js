import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  search: "",
  propertyType: "",
  beds: 0,
  operationType: "",
  country: "",
  minPrice: 0,
  maxPrice: 1000000,
  internacional: false
};

const propertyFilterSlice = createSlice({
  name: "propertyFilters",
  initialState,
  reducers: {
    setFilter(state, action) {
      const { key, value } = action.payload;
      state[key] = value;
    },
    resetFilters() {
      return initialState;
    },
    setAllFilters(state, action) {
      return {
        ...state,
        ...action.payload
      }
    }
  },
});

export const { setFilter, resetFilters, setAllFilters } = propertyFilterSlice.actions;
export default propertyFilterSlice.reducer;
