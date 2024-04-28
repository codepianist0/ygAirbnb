import PropTypes from "prop-types"
import React, { memo, useCallback, useState } from "react"
import SectionWrapper from "./style"
import SectionHeader from "@/components/section-header"
import SectionRooms from "@/components/section-rooms"
import SectionTab from "@/components/section-tab"
import SectionFooter from "@/components/section-footer"

const HomeSection = memo((props) => {
  const { roomsInfo } = props

  // tab列表
  const tabNameList = roomsInfo.dest_address?.map((item) => item.name)
  const firstTab = tabNameList[0]
  // 获取初始数据
  const [showList, setShowList] = useState(roomsInfo.dest_list?.[firstTab])
  const [ tabName, setTabName ] = useState(firstTab)
  // 修改显示列表
  const changeShowList = useCallback((name) => {
    setShowList(roomsInfo?.dest_list?.[name])
    setTabName(name)
  }, [roomsInfo.dest_list])

  return (
    <SectionWrapper>
      <SectionHeader title={roomsInfo.title} subtitle={roomsInfo.subtitle} />
      <SectionTab tabNameList={tabNameList} changeShowList={changeShowList} />
      <SectionRooms roomList={showList} itemWidth="33.3333%" />
      <SectionFooter name={tabName} />
    </SectionWrapper>
  )
})

HomeSection.propTypes = {
  roomsInfo: PropTypes.object,
}

export default HomeSection
