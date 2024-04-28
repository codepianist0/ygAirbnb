import PropTypes from 'prop-types'
import React, { memo } from 'react'
import SectionWrapper from './style'

import SectionHeader from "@/components/section-header"
import SectionRooms from "@/components/section-rooms"
import SectionFooter from '@/components/section-footer'

const HomeSection = memo((props) => {
  const { roomsInfo } = props
  return (
    <SectionWrapper>
       <SectionHeader title={roomsInfo.title} />
        <SectionRooms roomList={roomsInfo.list} />
        <SectionFooter />
    </SectionWrapper>
  )
})

HomeSection.propTypes = {
  roomsInfo: PropTypes.object
}

export default HomeSection