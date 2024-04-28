import styled from "styled-components"

const FilterWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-left: 16px;
  height: 48px;
  border-bottom: 1px solid #f2f2f2;
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
