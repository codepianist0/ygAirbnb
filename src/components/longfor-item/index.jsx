import React, { memo } from "react"
import ItemWrapper from "./style"
const LongforItem = memo((props) => {
  const { cityinfo } = props

  return (
    <ItemWrapper>
      <div className="item-container">
        <div className="img-cover">
          <img src={cityinfo.picture_url} alt="" />
          <div className="bg-cover"></div>
        </div>
        <div className="info">
          <div className="city">{cityinfo.city}</div>
          <div className="price">均价{cityinfo.price}</div>
        </div>
      </div>
    </ItemWrapper>
  )
})

export default LongforItem
