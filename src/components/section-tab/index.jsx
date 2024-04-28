import PropTypes from "prop-types"
import React, { memo, useState } from "react"
import TabWrapper from "./style"
import classNames from "classnames"
import ScrollView from "@/base-ui/scroll-view"

const SectionTab = memo((props) => {
  const { tabNameList = [], changeShowList } = props
  const [activeIndex, setActiveIndex] = useState(0)

  function changeActiveClick(index, item) {
    setActiveIndex(index)
    changeShowList(item)
  }
  return (
    <TabWrapper>
      <ScrollView>
        {tabNameList.map((item, index) => {
          return (
            <div
              key={item}
              className={classNames("tab-item", {
                active: activeIndex === index,
              })}
              onClick={(e) => changeActiveClick(index, item)}
            >
              {item}
            </div>
          )
        })}
      </ScrollView>
    </TabWrapper>
  )
})

SectionTab.propTypes = {
  tabNameList: PropTypes.array,
}

export default SectionTab
