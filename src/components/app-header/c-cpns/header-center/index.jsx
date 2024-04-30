import React, { memo, useCallback, useState, } from "react"
import { CSSTransition } from "react-transition-group"
import CenterWrapper from "./style"
import IconSearchBar from "@/assets/svg/icon-search-bar"
import SearchBar from "./c-cpns/search-tab"
import searchTitleInfo from "@/assets/data/search_titles.json"
import SearchSection from "./c-cpns/search-section"

const HeaderCenter = memo((props) => {
  const { isSearch, changeIsSearchHandle } = props
  const titles = searchTitleInfo.map((item) => {
    return item.title
  })
  const [activeIndex, setActiveIndex] = useState(0)

  const changeIndexHandle = useCallback((index) => {
    setActiveIndex(index)
  }, [])

  return (
    <CenterWrapper>
      <CSSTransition in={!isSearch} classNames="bar" timeout={250} unmountOnExit={true}>
        <div className="bar-box">
          <div className="detail-search" onClick={(e) => changeIsSearchHandle(true)}>
            <div className="span">搜索房源和体验</div>
            <div className="icon">
              <IconSearchBar />
            </div>
          </div>
        </div>
      </CSSTransition>
      <CSSTransition in={isSearch} timeout={250} unmountOnExit={true} classNames="detail">
        <div className="search-bar-container">
          <SearchBar
            titles={titles}
            activeIndex={activeIndex}
            changeIndexHandle={changeIndexHandle}
          >
            <SearchSection searchTitleInfo={searchTitleInfo[activeIndex].searchInfos} />
          </SearchBar>
        </div>
      </CSSTransition>
    </CenterWrapper>
  )
})

export default HeaderCenter
