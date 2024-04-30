import React, { memo } from "react"
import { TabWrapper } from "./style"
import classNames from "classnames"

const SearchTab = memo((props) => {
  const { titles, activeIndex, changeIndexHandle } = props

  function TabClickHandle(index) {
    changeIndexHandle(index)
  }

  return (
    <TabWrapper>
      <div className="tab-box">
        {titles.map((item, index) => (
          <div key={item} className="tab-item">
            <div className="text" onClick={e => TabClickHandle(index)}>{item}</div>
            <div className={classNames("under-line", {active: index === activeIndex})}></div>
          </div>
        ))}
      </div>
      <div className="tab-content">
        {props.children}
      </div>
    </TabWrapper>
  )
})

export default SearchTab
