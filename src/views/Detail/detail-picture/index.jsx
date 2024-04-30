import React, { memo, useCallback, useEffect, useState } from "react"
import { PictureWrapper } from "./style"
import { shallowEqual, useSelector } from "react-redux"
import PictureBrowser from "@/base-ui/picture-browser"

const DetailPicture = memo(() => {
  const { detailInfo } = useSelector(
    (state) => ({
      detailInfo: state.detail.detailInfo,
    }),
    shallowEqual
  )

  const [isShow, setIsshow] = useState(false)
  const showBrowserHandle = useCallback((isClose) => {
    setClickIndex(-1)
    isClose ? setIsshow(false): setIsshow(true)
  }, [])

  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isShow])

  const [clickIndex, setClickIndex] = useState(-1)
  function imgClickHandle(index) {
    setClickIndex(index)
    setIsshow(true)
  }
  
  return (
    <PictureWrapper>
      <div className="picture">
        <div className="left">
          <div className="img-box">
            <div className="cover"></div>
            <img onClick={e => imgClickHandle(0)} src={detailInfo.picture_urls?.[0]} alt="" />
          </div>
        </div>
        <div className="right">
          {detailInfo.picture_urls?.slice(1, 5).map((item, index) => (
            <div key={item} className="img-box">
              <div className="cover"></div>
              <img onClick={e => imgClickHandle(index+1)} src={item} alt=""  />
            </div>
          ))}
        </div>
      </div>
      <div className="show-img" onClick={e => showBrowserHandle(false)}>
        <span>显示照片</span>
      </div>
      {isShow && <PictureBrowser pictureUrls={detailInfo.picture_urls} closeClick={showBrowserHandle} clickIndex={clickIndex} />}
      
    </PictureWrapper>
  )
})

export default DetailPicture
