import PropTypes from "prop-types"
import React, { memo, useRef, useState } from "react"
import ItemWrapper from "./style"
import { Rating } from "@mui/material"
import { Carousel } from "antd"
import IconArrowLeft from "@/assets/svg/icon-arrow-left"
import IconArrowRight from "@/assets/svg/icon-arrow-right"
import Indicator from "@/base-ui/indicator"
import classNames from "classnames"

const RoomItem = memo((props) => {
  const { roomData, itemWidth = "25%", itemClick } = props

  function toDetailHandle(event) {
    if (itemClick) itemClick(roomData)
  }

  const carouselRef = useRef()
  const [currentIndex, setCurrentIndex] = useState(0)
  function changeImgHandle(isNext, event) {
    event.stopPropagation() // 阻止事件的传播

    let newIndex = isNext ? currentIndex + 1 : currentIndex - 1
    const imgArrayLength = roomData.picture_urls.length
    if (newIndex > imgArrayLength - 1) newIndex = 0
    if (newIndex < 0) newIndex = imgArrayLength - 1
    isNext ? carouselRef.current.next() : carouselRef.current.prev()
    setCurrentIndex(newIndex)
  }

  // 展示一张图片
  const ImgEl = (
    <div className="cover">
      <img src={roomData.picture_url} alt="" />
    </div>
  )

  // 展示轮播图片
  const CarouselImgEl = (
    <div className="carousel">
      {/* 切换控制 */}
      <div className="control">
        <div className="control-btn left-btn" onClick={(e) => changeImgHandle(false, e)}>
          <IconArrowLeft width="30px" height="30px" />
        </div>
        <div className="control-btn right-btn" onClick={(e) => changeImgHandle(true, e)}>
          <IconArrowRight width="30px" height="30px" />
        </div>
      </div>
      {/* 指示器 */}
      <div className="indicator">
        <Indicator currentIndex={currentIndex}>
          {roomData.picture_urls?.map((item, index) => {
            return (
              <div key={item} className={"d-item"}>
                <div className={classNames("dont", { active: index === currentIndex })}></div>
              </div>
            )
          })}
        </Indicator>
      </div>
      {/* 轮播图 */}
      <Carousel dots={false} ref={carouselRef}>
        {roomData.picture_urls?.map((item) => {
          return (
            <div key={item} className="cover">
              <img src={item} alt="" />
            </div>
          )
        })}
      </Carousel>
    </div>
  )

  return (
    <ItemWrapper verifyColor={roomData.verify_info.text_color} itemWidth={itemWidth}>
      <div className="inner" onClick={(e) => toDetailHandle(e)}>
        {/* img */}
        {roomData.picture_urls ? CarouselImgEl : ImgEl}
        {/* imfo */}
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
            {roomData?.bottom_info?.content && "· " + roomData?.bottom_info?.content}
          </span>
        </div>
      </div>
    </ItemWrapper>
  )
})

RoomItem.propTypes = {
  roomData: PropTypes.object,
  itemWidth: PropTypes.string, // item的宽度
}

export default RoomItem
