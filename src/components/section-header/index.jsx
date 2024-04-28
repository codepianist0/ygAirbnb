import PropTypes from "prop-types"
import React, { memo } from "react"
import HeaderWrapper from "./style"

const SectionHeader = memo((props) => {
  const { title = "", subtitle=false } = props
  return (
    <HeaderWrapper>
      <h2 className="title">{title}</h2>
      {subtitle && <div className="subtitle">{subtitle}</div>}
    </HeaderWrapper>
  )
})

SectionHeader.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
}

export default SectionHeader
