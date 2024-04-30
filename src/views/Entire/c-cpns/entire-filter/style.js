import styled from "styled-components"

const FilterWrapper = styled.div`
  position: fixed;
  z-index: 99;
  top: 80px;
  display: flex;
  align-items: center;
  padding-left: 16px;
  width: 100%;
  height: 48px;
  border-bottom: 1px solid #f2f2f2;
  box-sizing: border-box;
  background-color: #fff;
  .filter-content {
    display: flex;
    .filter-item {
      margin: 0 4px 0 8px;
      padding: 6px 12px;
      border: 1px solid #dce0e0;
      border-radius: 5px;
      font-size: 14px;
      cursor: pointer;
      user-select: none;
      &:hover {
        ${(props) => props.theme.mixin.boxShadow}
      }
      &.active {
        background-color: ${(props) => props.theme.color.secondColor};
        color: #fff;
      }
    }
  }
`

export default FilterWrapper
