import styled from "styled-components"

const ItemWrapper = styled.div`
  box-sizing: border-box;
  padding: 8px;
  margin-left: -8px;
  width: 25%;
  font-size: 12px;

  .cover {
    height: 164px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      border-radius: 5px;
    }
  }
  .verify {
    margin: 10px 0 5px;
    color: #767676;
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
      color: ${props => props.theme.color.secondColor}
    }
    .bottom {
      margin-left: 3px;
      font-weight: 700;
    }
  }
`

export default ItemWrapper
