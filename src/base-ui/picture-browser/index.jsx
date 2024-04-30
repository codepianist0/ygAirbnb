import React, { memo, useEffect, useState } from "react"
import { SwitchTransition, CSSTransition } from "react-transition-group"
import { PictureBrowSerWrapper } from "./style"
import IconClose from "@/assets/svg/icon-close"
import IconArrowLeft from "@/assets/svg/icon-arrow-left"
import IconArrowRight from "@/assets/svg/icon-arrow-right"
import Indicator from "../indicator"
import classNames from "classnames"

const PictureBrowser = memo((props) => {
  const { pictureUrls, closeClick, clickIndex } = props
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if(clickIndex !== -1) setCurrentIndex(clickIndex)
  }, [clickIndex])

  // 关闭图片浏览器
  function closeClickHandle() {
    closeClick(true)
  }

  // 切换图片
  function changeImgHandle(isNext) {
    let newIndex = isNext ? currentIndex + 1 : currentIndex - 1
    if (newIndex >= pictureUrls.length) newIndex = 0
    if (newIndex <= -1) newIndex = pictureUrls.length - 1
    setCurrentIndex(newIndex)
  }
  function imgClickHandle(index) {
    setCurrentIndex(index)
  }

  return (
    <PictureBrowSerWrapper>
      <div className="top">
        <div className="icon" onClick={closeClickHandle}>
          <IconClose />
        </div>
      </div>
      <div className="p-content">
        <div className="control">
          <div className="c-item" onClick={(e) => changeImgHandle(false)}>
            <IconArrowLeft width="77px" height="77px" />
          </div>
          <div className="c-item" onClick={(e) => changeImgHandle(true)}>
            <IconArrowRight width="77px" height="77px" />
          </div>
        </div>
        <div className="p-picture">
          <SwitchTransition mode="in-out">
            <CSSTransition key={pictureUrls[currentIndex]} classNames="change-img" timeout={1000}>
              <img src={pictureUrls[currentIndex]} alt="" />
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>
      <div className="r-footer">
        <div className="review">
          <div className="r-info">
            <span>{currentIndex}/{pictureUrls.length}:room </span>
            <span> apartment图片{currentIndex}</span>
          </div>
          <div className="r-imgs">
            <Indicator currentIndex={currentIndex}>
              {pictureUrls.map((item, index) => (
                <div key={item} className="r-box">
                  <img
                    className={classNames({ active: index === currentIndex })}
                    src={item}
                    onClick={e => imgClickHandle(index)}
                    alt=""
                  />
                </div>
              ))}
            </Indicator>
          </div>
        </div>
      </div>
    </PictureBrowSerWrapper>
  )
})

export default PictureBrowser
