import styled from "styled-components"

const ScrollWrapper = styled.div`
  position: relative;
  .scroll-cover {
    width: 1032px;
    overflow: hidden;
  }
  .scroll-content {
    display: flex;
    transition: all 0.2s ease-in-out;
    > * {
      flex-shrink: 0;
    }
  }
  .arrow {
    position: absolute;
    z-index: 9;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    background-color: #f6f6f6;
    border-radius: 50%;
    cursor: pointer;
    &:hover {
      background-color: #f3f3f3;
    }
    &.right {
      top: 50%;
      right: 0;
      transform: translate(50%, -50%);
    }
    &.left {
      top: 50%;
      left: 0;
      transform: translate(-50%, -50%);
    }
  }
`

export default ScrollWrapper
