import React, { memo, useState } from "react"
import { DemoWrapper } from "./style"
import Indicator from "@/base-ui/indicator"

const Demo = memo(() => {
  const info = ["aa", "lisi", "wangwu", "liuliu", "coderwhy", "codePianist", "bbb", "cc", "dd"]
  const [index, setIndex] = useState(0)
  function changeIndexHandle(isNext) {
    let newIndex = isNext ? index + 1 : index - 1

    if (newIndex < 0) newIndex = info.length - 1
    if (newIndex >= info.length) newIndex = 0
    isNext ? setIndex(newIndex) : setIndex(newIndex)
  }

  return (
    <DemoWrapper>
      <div className="box">
        <button onClick={(e) => changeIndexHandle(true)}>next</button>
        <button onClick={(e) => changeIndexHandle(true)}>prev</button>
        <Indicator currentIndex={index}>
          {info.map((item) => (
            <div key={item} className="item">
              {item}
            </div>
          ))}
        </Indicator>
      </div>
    </DemoWrapper>
  )
})

export default Demo
