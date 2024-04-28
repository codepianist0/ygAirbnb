import styled from "styled-components"

const ItemWrapper = styled.div`
  box-sizing: border-box;
  width: 20%;
  padding: 8px;
  flex-shrink: 0;
  .item-container {
    position: relative;
    cursor: pointer;
    .img-cover {
      img {
        position: relative;
        width: 100%;
        user-select: none;
      }
      .bg-cover {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 50%;
        /* 从上到下 3位置 透明到 100位置 黑色 */
        background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 3%, rgb(0, 0, 0) 100%);
      }
    }
    .info {
      position: absolute;
      z-index: 2;
      width: 100%;
      bottom: 12%;
      text-align: center;
      color: #fff;
      .city {
        margin-bottom: 3px;
        font-size: 18px;
        font-weight: 700;
      }
    }
  }
`

export default ItemWrapper
