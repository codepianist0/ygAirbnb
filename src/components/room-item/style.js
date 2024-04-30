import styled from "styled-components"

const ItemWrapper = styled.div`
  flex-shrink: 0;
  box-sizing: border-box;
  padding: 8px;
  width: ${(props) => props.itemWidth};
  font-size: 12px;
  .inner {
    width: 100%;
  }
  .carousel {
    position: relative;
    cursor: pointer;
    &:hover {
      .control {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
  }
  .control {
    z-index: 1;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    display: none;
    width: 100%;
    height: 100%;
    .control-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 35%;
      height: 100%;
      color: #fff;
      &.left-btn {
        left: 0;
        background-image: linear-gradient(to right, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0) 100%);
      }
      &.right-btn {
        right: 0;
        background-image: linear-gradient(to left, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0) 100%);
      }
    }
  }
  .indicator {
    position: absolute;
    z-index: 9;
    bottom: 10px;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 40%;
    .d-item {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 14.29%;
      height: 10px;
      .dont {
        width: 6px;
        height: 6px;
        background-color: #fff;
        border-radius: 50%;
        &.active {
          width: 9px;
          height: 9px;
          background-color: #fff;
        }
      }
    }
  }
  .cover {
    position: relative;
    box-sizing: border-box;
    padding: 66.66% 8px 0;
    border-radius: 3px;
    overflow: hidden;
    img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }
  }
  .verify {
    margin: 10px 0 5px;
    font-weight: 600;
    color: ${((props) => props.verifyColor) ?? "#767676"};
  }
  .name {
    font-size: 16px;
    font-weight: 700;
    word-break: break-all;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
  .price {
    margin: 8px 0;
    font-size: 14px;
  }
  .evaluate {
    display: flex;
    align-items: center;
    .MuiRating-root {
      color: ${(props) => props.theme.color.secondColor};
    }
    .bottom {
      margin-left: 3px;
      font-weight: 700;
    }
  }
`



export default ItemWrapper
