import React, { memo } from "react"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import PaginationWrapper from "./style"
import { Pagination } from "@mui/material"
import { fetchEntireInfoAction } from "@/store/modules/entire/creatorAction"

const EntirePagination = memo(() => {
  const { totalCount, currentPage } = useSelector(
    (state) => ({
      totalCount: state.entire.totalCount,
      currentPage: state.entire.currentPage,
    }),
    shallowEqual
  )

  const pageCount = Math.ceil(totalCount / 20)
  const startCount = (currentPage - 1) * 20 + 1
  const endCount = currentPage * 20

  const dispatch = useDispatch()
  function changePageHandle(event, value) {
    // 发送网络请求重新获取数据
    const offset = (currentPage - 1) * 20
    dispatch(fetchEntireInfoAction(offset, value))
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    })
  }

  return (
    <PaginationWrapper>
      {!!totalCount && (
        <div className="pagination-content">
          <Pagination count={pageCount} onChange={changePageHandle} />
          <div className="text">
            第 {startCount} - {endCount} 个房源,共超过 {totalCount} 个
          </div>
        </div>
      )}
    </PaginationWrapper>
  )
})

export default EntirePagination
