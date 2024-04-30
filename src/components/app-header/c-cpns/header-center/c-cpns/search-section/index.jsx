import React, { memo } from "react"
import { SectionWrapper } from "./style"

const SearchSection = memo((props) => {
  const { searchTitleInfo } = props

  return (
    <SectionWrapper>
      {searchTitleInfo.map((item, index) => (
        <div key={item.title} className="item">
          <div className="info">
            <div className="title">{item.title}</div>
            <div className="desc">{item.desc}</div>
          </div>
          { index !== searchTitleInfo.length - 1 && <div className="parting-line"/> }
        </div>
      ))}
    </SectionWrapper>
  )
})

export default SearchSection
