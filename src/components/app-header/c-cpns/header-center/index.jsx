import React, { memo } from "react"
import CenterWrapper from "./style"
import IconSearchBar from "@/assets/svg/icon-search-bar"

const HeaderCenter = memo(() => {
  return <CenterWrapper>
    <div className="left">
      <span className="span">搜索房源和体验</span>
    </div>
    <div className="right">
      
      <IconSearchBar />
    </div>
  </CenterWrapper>
})

export default HeaderCenter
