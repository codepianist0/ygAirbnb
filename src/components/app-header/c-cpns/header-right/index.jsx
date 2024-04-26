import React, { memo, useEffect, useState } from "react"
import RightWrapper from "./style"
import IconGlobal from "@/assets/svg/icon_global"
import IconMenu from "@/assets/svg/icon_menu"
import IconAvatar from "@/assets/svg/icon_avatar"

const HeaderRight = memo(() => {
  const [showPanel, setShowPanel] = useState(false)

  function changeShowPanel() {
    setShowPanel(true)
  }
  useEffect(() => {
    function windowClick(event) {
      setShowPanel(false)
    }
    // 在捕获阶段触发，默认是冒泡
    window.addEventListener("click", windowClick, true)
    return () => {
      window.removeEventListener("click", windowClick, true)
    }
  }, [])

  return (
    <RightWrapper>
      <div className="btns">
        <span className="item">登录</span>
        <span className="item">注册</span>
        <div className="item">
          <IconGlobal />
        </div>
      </div>
      <div className="profile" onClick={changeShowPanel}>
        <IconMenu />
        <IconAvatar />
        {showPanel && (
          <div className="panel">
            <div className="top">
              <div className="item">注册</div>
              <div className="item">登录</div>
            </div>
            <div className="bottom">
              <div className="item">出租房源</div>
              <div className="item">开展体验</div>
              <div className="item">帮助</div>
            </div>
          </div>
        )}
      </div>
    </RightWrapper>
  )
})

export default HeaderRight
