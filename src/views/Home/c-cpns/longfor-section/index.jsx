import React, { memo } from "react"
import LongforWrapper from "./style"
import SectionHeader from "@/components/section-header"
import LongforItem from "@/components/longfor-item"
import ScrollView from "@/base-ui/scroll-view"

const HomeSection = memo((props) => {
  const { roomsInfo } = props
  return (
    <LongforWrapper>
      <SectionHeader title={roomsInfo.title} subtitle={roomsInfo.subtitle} />
      <div className="content">
        <ScrollView>
          {roomsInfo.list.map((item) => {
            return <LongforItem key={item.image_url} cityinfo={item} />
          })}
        </ScrollView>
      </div>
    </LongforWrapper>
  )
})

export default HomeSection
