import { getEntireRooms } from "@/services/modules/entire"
import { CHANGE_CURRENT_PAGE, CHANGE_IS_LOADING, CHANGE_ROOM_LIST, CHANGE_TOTAL_COUNT } from "./constants"

export const changeCurrentPageAction = (currentPage) => ({
  type: CHANGE_CURRENT_PAGE,
  currentPage,
})

export const changeRoomListAction = (roomList) => ({
  type: CHANGE_ROOM_LIST,
  roomList,
})

export const changeTotalCountAction = (totalCount) => ({
  type: CHANGE_TOTAL_COUNT,
  totalCount,
})

export const changeLoadingAction = (isLoading) => ({
  type: CHANGE_IS_LOADING,
  isLoading
})

export const fetchEntireInfoAction = (offset, currentPage = 1) => {
  return async (dispatch, getState) => {
    dispatch(changeCurrentPageAction(currentPage))
    dispatch(changeLoadingAction(true)) 
    const res = await getEntireRooms(offset)
    dispatch(changeLoadingAction(false))

    dispatch(changeTotalCountAction(res.totalCount))
    dispatch(changeRoomListAction(res.list))
  }
}
