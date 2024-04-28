import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import {
  getGoodPriceRooms,
  getGoodScoreRooms,
  getDiscountRooms,
  getRecommendRoos,
  getLongforRoos,
  getPlusRooms,
} from "@/services"

export const fetchHomeDataAction = createAsyncThunk(
  "fetchHomeData",
  async (payload, { dispatch }) => {
    getGoodPriceRooms().then((res) => {
      dispatch(changeGoodPriceInfoAction(res))
    })
    getGoodScoreRooms().then((res) => {
      dispatch(changeGoodScoureInfoAction(res))
    })
    getDiscountRooms().then((res) => {
      dispatch(changeDiscountInfoAction(res))
    })
    getRecommendRoos().then((res) => {
      dispatch(changeRecommendInfoAction(res))
    })
    getLongforRoos().then((res) => {
      dispatch(changeLongforInfoAction(res))
    })
    getPlusRooms().then((res) => {
      dispatch(changePlusInfoAction(res))
    })
  }
)

const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: {},
    goodScoureInfo: {},
    discountInfo: {},
    recommendInfo: {},
    longforInfo: {},
    pulsInfo: {},
  },
  reducers: {
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload
    },
    changeGoodScoureInfoAction(state, { payload }) {
      state.goodScoureInfo = payload
    },
    changeDiscountInfoAction(state, { payload }) {
      state.discountInfo = payload
    },
    changeRecommendInfoAction(state, { payload }) {
      state.recommendInfo = payload
    },
    changeLongforInfoAction(state, { payload }) {
      state.longforInfo = payload
    },
    changePlusInfoAction(state, { payload }) {
      state.pulsInfo = payload
    },
  },
})
const {
  changeGoodPriceInfoAction,
  changeGoodScoureInfoAction,
  changeDiscountInfoAction,
  changeRecommendInfoAction,
  changeLongforInfoAction,
  changePlusInfoAction,
} = homeSlice.actions

export default homeSlice.reducer
