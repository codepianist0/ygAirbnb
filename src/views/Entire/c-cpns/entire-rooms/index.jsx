import React, { memo, useCallback } from "react"
import RoomsWrapper from "./style"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import RoomItem from "@/components/room-item"
import { useNavigate } from "react-router-dom"
import { changeDetailInfoAction } from "@/store/modules/detail"

const EntireRooms = memo(() => {
  const { roomList, totalCount, isLoading } = useSelector(
    (state) => ({
      roomList: state.entire.roomList,
      totalCount: state.entire.totalCount,
      isLoading: state.entire.isLoading,
    }),
    shallowEqual
  )
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const itemClickHandle = useCallback(
    (item) => {
      dispatch(changeDetailInfoAction(item))
      navigate("/detail")
    },
    [dispatch, navigate]
  )

  return (
    <RoomsWrapper>
      <h2 className="title">{totalCount}多处住处</h2>
      <div className="roomContext">
        {roomList.map((item) => (
          <RoomItem key={item._id} roomData={item} itemWidth="20%" itemClick={itemClickHandle} />
        ))}
      </div>
      {isLoading && <div className="loading-cover"></div>}
    </RoomsWrapper>
  )
})

export default EntireRooms
