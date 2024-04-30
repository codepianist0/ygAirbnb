import React, { memo, useEffect } from "react"
import EntireFilter from "./c-cpns/entire-filter"
import { useDispatch } from "react-redux"
import { fetchEntireInfoAction } from "@/store/modules/entire/creatorAction"
import { changeHeaderConfigAction } from '@/store/modules/main'
import EntireRooms from "./c-cpns/entire-rooms"
import EntirePagination from "./c-cpns/entire-pagination"
import { EntireWrapper } from "./style"

const Entire = memo(() => {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchEntireInfoAction())
    dispatch(changeHeaderConfigAction({ isFixed: true, topAlpha: false }))
  }, [dispatch])


  return (
    <EntireWrapper>
      <EntireFilter />
      <EntireRooms />
      <EntirePagination />
    </EntireWrapper>
  )
})

export default Entire
