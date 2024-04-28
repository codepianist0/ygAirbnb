import React, { memo } from 'react'
import SectionWrapper from './style'
import SectionHeader from '@/components/section-header'
import ScrollView from '@/base-ui/scroll-view'
import RoomItem from '@/components/room-item'
import SectionFooter from '@/components/section-footer'

const HomeSection = memo((props) => {
  const { roomsInfo } = props
  
  return (
    <SectionWrapper>
      <SectionHeader title={roomsInfo.title} subtitle={roomsInfo.subtitle} />
      <div className="content">
        <ScrollView >
          {
            roomsInfo.list.map(item => {
              return <RoomItem key={item.id} roomData={item} itemWidth="20%" />
            })
          }
        </ScrollView>
      </div>
      <SectionFooter name="Plus" />
    </SectionWrapper>
  )
})

export default HomeSection