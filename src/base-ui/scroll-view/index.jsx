import React, { memo, useEffect, useRef, useState } from "react"
import ScrollWrapper from "./style"
import IconArrowLeft from "@/assets/svg/icon-arrow-left"
import IconArrowRight from "@/assets/svg/icon-arrow-right"

const ScrollView = memo((props) => {
  const [preIsShow, setPreIsShow] = useState(false)
  const [nexIsShow, setNexIsShow] = useState(true)
  const [currenIndex, setCurrentIndex] = useState(0)

  const contentRef = useRef()
  const totalDistanceRef = useRef()

  useEffect(() => {
    const scrollWidth = contentRef.current.scrollWidth // 元素的宽度包括由于overflow溢出不可见的部分
    const clientWidth = contentRef.current.clientWidth // 元素的宽度
    const scrollSurplus = scrollWidth - clientWidth
    totalDistanceRef.current = scrollSurplus
  }, [props.children])

  function changeItemHandle(isNext) {
    // 1. 偏移
    const newIndex = isNext ? currenIndex + 1 : currenIndex - 1
    const newEl = contentRef.current.children[newIndex]
    const changeWidth = newEl.offsetLeft
    contentRef.current.style.transform = `translate(-${changeWidth}px)`
    setCurrentIndex(newIndex)
    // 2. 判断是否显示
    setNexIsShow(changeWidth < totalDistanceRef.current) // 如果偏移长度小于溢出长度,就显示
    setPreIsShow(changeWidth > 0)
  }

  return (
    <ScrollWrapper>
      <div>
        {preIsShow && (
          <div className="arrow left" onClick={(e) => changeItemHandle(false)}>
            <IconArrowLeft />
          </div>
        )}
        {nexIsShow && (
          <div className="arrow right" onClick={(e) => changeItemHandle(true)}>
            <IconArrowRight />
          </div>
        )}
      </div>
      <div className="scroll-cover">
        <div className="scroll-content" ref={contentRef}>
          {props.children}
        </div>
      </div>
    </ScrollWrapper>
  )
})

ScrollView.propTypes = {}

export default ScrollView
