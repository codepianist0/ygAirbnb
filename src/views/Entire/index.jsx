import React, { memo, useEffect } from "react"
import EntireFilter from "./c-cpns/entire-filter"
import { useDispatch } from "react-redux"
import { fetchEntireInfoAction } from "@/store/modules/entire/creatorAction"
import EntireRooms from "./c-cpns/entire-rooms"
import EntirePagination from "./c-cpns/entire-pagination"

const Entire = memo(() => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchEntireInfoAction())
  }, [dispatch])
  return (
    <div>
      <EntireFilter />
      <EntireRooms />
      <EntirePagination />
    </div>
  )
})

export default Entire
