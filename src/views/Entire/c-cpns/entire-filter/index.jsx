import React, { memo, useState } from "react"
import FilterWrapper from "./style"
import filterData from "@/assets/data/filter_data.json"
import classNames from "classnames"

const EntireFilter = memo(() => {
  const [selectList, setSelectList] = useState([])

  function addSelectHandle(item) {
    const newList = [...selectList]
    // 判断是否已经有这个过滤条件了
    if (selectList.includes(item)) {
      const index = selectList.findIndex((itm) => item === itm)
      newList.splice(index, 1)
    } else {
      newList.push(item)
    }
    setSelectList(newList)
  }

  return (
    <FilterWrapper>
      <div className="filter-content">
        {filterData.map((item) => {
          return (
            <div
              key={item}
              className={classNames("filter-item", {
                active: selectList.find((name) => name === item),
              })}
              onClick={(e) => addSelectHandle(item)}
            >
              {item}
            </div>
          )
        })}
      </div>
    </FilterWrapper>
  )
})

export default EntireFilter
