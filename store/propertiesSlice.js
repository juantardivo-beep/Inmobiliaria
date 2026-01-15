import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { getProperties, transformWordPressProperty } from "../lib/wordpress-api"

export const fetchProperties = createAsyncThunk(
  "properties/fetch",
  async () => {
    const data = await getProperties({ perPage: 100 })
    return data.map(transformWordPressProperty)
  }
)

const propertiesSlice = createSlice({
  name: "properties",
  initialState: {
    all: [],
    status: "idle", // idle | loading | succeeded | failed
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProperties.pending, (state) => {
        state.status = "loading"
      })
      .addCase(fetchProperties.fulfilled, (state, action) => {
        state.all = action.payload
        state.status = "succeeded"
      })
  }
})

export default propertiesSlice.reducer
