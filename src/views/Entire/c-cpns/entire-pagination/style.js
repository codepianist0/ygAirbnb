import styled from "styled-components"

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  .pagination-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .MuiPaginationItem-page {
      margin-left: 20px;
      &:hover {
        text-decoration: underline;
      }
      &.Mui-selected {
        background-color: #000;
        color: #fff;
      }
    }
    .text {
      margin: 15px 0;
    }
  }
`

export default PaginationWrapper
