import React, { memo, useEffect } from "react"
import HomeWrapper from "./style"
import HomeBanner from "./c-cpns/home-banner"
import { fetchHomeDataAction } from "@/store/modules/home"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { isEmptyObj } from "@/utils"
import HomeSectionV1 from "./c-cpns/home-section-v1"
import HomeSectionV2 from "./c-cpns/home-section-v2"
import HomeSectionV3 from "./c-cpns/home-section-v3"
import LongforSection from "./c-cpns/longfor-section"

const Home = memo(() => {
  // dispatch action
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeDataAction())
  }, [dispatch])

  // get Info
  const { goodPriceInfo, goodScoureInfo, discountInfo, recommendInfo, longforInfo, pulsInfo } =
    useSelector(
      (state) => ({
        goodPriceInfo: state.home.goodPriceInfo,
        goodScoureInfo: state.home.goodScoureInfo,
        discountInfo: state.home.discountInfo,
        recommendInfo: state.home.recommendInfo,
        longforInfo: state.home.longforInfo,
        pulsInfo: state.home.pulsInfo,
      }),
      shallowEqual
    )
  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        {isEmptyObj(discountInfo) && <HomeSectionV2 roomsInfo={discountInfo} />}
        {isEmptyObj(recommendInfo) && <HomeSectionV2 roomsInfo={recommendInfo} />}
        {isEmptyObj(longforInfo) && <LongforSection roomsInfo={longforInfo} />}
        {isEmptyObj(discountInfo) && <HomeSectionV1 roomsInfo={goodPriceInfo} />}
        {isEmptyObj(discountInfo) && <HomeSectionV1 roomsInfo={goodScoureInfo} />}
        {isEmptyObj(pulsInfo) && <HomeSectionV3 roomsInfo={pulsInfo} />}
      </div>
    </HomeWrapper>
  )
})

export default Home
