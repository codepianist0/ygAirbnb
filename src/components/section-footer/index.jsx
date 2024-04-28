import React, { memo } from "react"
import FooterWrapper from "./style"
import IconMoreArrow from "@/assets/svg/icon-more-arrow"
import { useNavigate } from "react-router-dom"

const SectionFooter = memo((props) => {
  const { name } = props
  
  // 跳转
  const navigate = useNavigate()
  function reviewMoreHandle() {
    navigate("/entire")
  }

  return (
    <FooterWrapper hasName={name}>
      {name ? (
        <div className="more" onClick={e => reviewMoreHandle()}>
          <span className="more-text">显示更多{name}房源</span>
          <IconMoreArrow />
        </div>
      ) : (
        <div className="more" onClick={e => reviewMoreHandle()}>
          <span className="more-text">显示全部</span>
          <IconMoreArrow />
        </div>
      )}
    </FooterWrapper>
  )
})

export default SectionFooter
