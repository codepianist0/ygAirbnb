import PropTypes from "prop-types"
import React, { memo } from "react"
import RoomsWrapper from "./style"
import RoomItem from "../room-item"

const SectionRooms = memo((props) => {
  const { roomList = [], itemWidth } = props
  return (
    <RoomsWrapper>
      {roomList.slice(0, 8).map((item) => {
        return <RoomItem key={item.id} roomData={item} itemWidth={itemWidth} />
      })}
    </RoomsWrapper>
  )
})

SectionRooms.propTypes = {
  roomList: PropTypes.array, // 房间数据
  
}

export default SectionRooms
