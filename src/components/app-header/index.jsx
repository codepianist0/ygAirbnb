import React, { memo, useCallback, useRef, useState } from "react"
import HeaderWrapper from "./style"
import HeaderLogo from "./c-cpns/header-left"
import HeaderCenter from "./c-cpns/header-center"
import HeaderRight from "./c-cpns/header-right"
import { shallowEqual, useSelector } from "react-redux"
import classNames from "classnames"
import useGetScroll from "@/hooks/useGetScroll"
import { ThemeProvider } from "styled-components"

const AppHeader = memo(() => {
  const { headerConfig } = useSelector(
    (state) => ({
      headerConfig: state.main.headerConfig,
    }),
    shallowEqual
  )
  const { topAlpha, isFixed } = headerConfig

  const [isSearch, setIsSearch] = useState(false)
  const changeIsSearchHandle = useCallback((isClose) => {
    setIsSearch(isClose)
  }, [])

  // 监听滚动
  const { scrollY } = useGetScroll()
  let preY = useRef(0)
  // 当进入search的时候，停止记录
  if (!isSearch) preY.current = scrollY
  // 如果search时滚动超过30，退出search
  if (isSearch && Math.abs(scrollY - preY.current) > 30) setIsSearch(false)

  // 是否透明
  const isAlpha = topAlpha && scrollY === 0

  return (
    <ThemeProvider theme={{isAlpha}}>
      <HeaderWrapper className={classNames({ fixed: isFixed })} isAlpha={isAlpha}>
        <div className="top">
          <HeaderLogo />
          <HeaderCenter isSearch={isAlpha || isSearch} changeIsSearchHandle={changeIsSearchHandle} />
          <HeaderRight />
        </div>
        <div className="search-area-wrapper"></div>
        {isSearch && (
          <div>
            <div className="content" />
            <div className="cover" onClick={(e) => changeIsSearchHandle(false)} />
          </div>
        )}
      </HeaderWrapper>
    </ThemeProvider>
  )
})

export default AppHeader
