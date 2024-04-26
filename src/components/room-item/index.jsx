import PropTypes from "prop-types"
import React, { memo } from "react"
import ItemWrapper from "./style"
import { Rating } from "@mui/material"

const RoomItem = memo((props) => {
  const { roomData } = props
  return (
    <ItemWrapper>
      <div className="cover">
        <img src={roomData.picture_url} alt="" />
      </div>
      <div className="verify">{roomData.verify_info.messages.join(" · ")}</div>
      <div className="name">{roomData.name}</div>
      <div className="price">￥{roomData.price}/晚</div>
      <div className="evaluate">
        <Rating
          name="simple-controlled"
          value={roomData.star_rating ?? 3.8}
          precision={0.1}
          size="samll"
          readOnly
          sx={{ fontSize: "13px", marginRight: "-1px" }}
        />
        <span className="bottom">
          {roomData.reviews_count}
          {roomData?.bottom_info?.content &&
            "· " + roomData?.bottom_info?.content}
        </span>
      </div>
    </ItemWrapper>
  )
})

RoomItem.propTypes = {
  roomData: PropTypes.object,
}

export default RoomItem
