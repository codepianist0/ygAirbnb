import React, { memo, useEffect, useRef } from "react"
import IndicatorWrapper from "./style"

const Indicator = memo((props) => {
  // const [currenIndex, setCurrentIndex] = useState(0)
  const { currentIndex } = props

  const contentRef = useRef()

  useEffect(() => {
    // let newIndex = isNext ? currenIndex + 1 : currenIndex - 1
    // 边界判断
    // if (newIndex < 0) newIndex = info.length - 1
    // if (newIndex >= info.length) newIndex = 0
    // content
    const contentWidth = contentRef.current.offsetWidth
    const contentScrollWidth = contentRef.current.scrollWidth
    // currenItem
    const itemOffsetLeft = contentRef.current.children[currentIndex]?.offsetLeft
    const itemWidth = contentRef.current.children[currentIndex]?.offsetWidth

    let translateX = itemOffsetLeft + itemWidth / 2 - contentWidth / 2

    if (itemOffsetLeft + itemWidth / 2 < contentWidth / 2) translateX = 0
    // 如果滚动的宽度大于超出的宽度,则设置滚动为超出宽度
    const overWidth = contentScrollWidth - contentWidth
    if (translateX > overWidth) translateX = overWidth
    contentRef.current.style.transform = `translate(${-translateX}px)`
  }, [currentIndex])

  return (
    <IndicatorWrapper>
      <div className="content" ref={contentRef}>
        {props.children}
      </div>
    </IndicatorWrapper>
  )
})

export default Indicator
