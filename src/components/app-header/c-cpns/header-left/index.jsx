import React, { memo } from "react"
import LeftWrapper from "./style"
import IconLogo from "@/assets/svg/icon_logo"
import { useNavigate } from "react-router-dom"

const HeaderLeft = memo(() => {

  const navigate = useNavigate()
  function clickLogoHandle() {
    navigate("/")
  }

  return (
    <LeftWrapper>
      <div className="logo" onClick={clickLogoHandle}>
        <IconLogo />
      </div>
    </LeftWrapper>
  )
})

export default HeaderLeft
