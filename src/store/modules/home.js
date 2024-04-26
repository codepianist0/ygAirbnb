import { getGoodPriceRooms } from "@/services"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const fetcGoodPriceDataAction = createAsyncThunk("getGoodPriceData", async () => {
  const res = await getGoodPriceRooms()
  return res
})

const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: {}
  },
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder.addCase(fetcGoodPriceDataAction.fulfilled, (state, {payload}) => {
      state.goodPriceInfo = payload
    })
  }
})


export default homeSlice.reducer
