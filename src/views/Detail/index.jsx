import React, { memo, useEffect } from 'react'
import { DetailWrapper } from './style'
import DetailPicture from './detail-picture'
import { useDispatch } from 'react-redux'
import { changeHeaderConfigAction } from '@/store/modules/main'


const Detail = memo(() => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(changeHeaderConfigAction({ isFixed: false, topAlpha: false }))
  }, [dispatch])

  return (
    <DetailWrapper>
      <DetailPicture />
    </DetailWrapper>
  )
})

export default Detail