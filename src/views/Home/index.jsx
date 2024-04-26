import React, { memo, useEffect } from "react"
import HomeWrapper from "./style"
import HomeBanner from "./c-cpns/home-banner"
import { fetcGoodPriceDataAction } from "@/store/modules/home"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import SectionHeader from "@/components/section-header"
import SectionRooms from "@/components/section-rooms"

const Home = memo(() => {
  const dispatch = useDispatch()
  const { goodPriceInfo } = useSelector(
    (state) => ({
      goodPriceInfo: state.home.goodPriceInfo,
    }),
    shallowEqual
  )
  useEffect(() => {
    dispatch(fetcGoodPriceDataAction())
  }, [dispatch])

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        {/* 高性价比 */}
        <div className="good-price">
          <SectionHeader title={goodPriceInfo.title} />
          <SectionRooms roomList={goodPriceInfo.list} />
        </div>
      </div>
    </HomeWrapper>
  )
})

export default Home
