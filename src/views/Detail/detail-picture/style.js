import styled from "styled-components"

export const PictureWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 600px;
  .picture {
    display: flex;
    height: 100%;
    transition: all .2s ease-in;
    &:hover {
      .cover {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.2);
        opacity: 1;
      }
    }
    .img-box {
      position: relative;
      overflow: hidden;
      img {
        cursor: pointer;
        transition: transform .3s ease-in;
      }
      &:hover {
        img {
          transform: scale(1.1);
        }
      }
    }
    .left {
      flex: 1;
      img {
        width: 100%;
        height: 600px;
        object-fit: cover;
      }
    }
    .right {
      flex: 1;
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      .img-box {
        width: 50%;
        height: 300px;
        border: 1px solid #000;
        box-sizing: border-box;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  .show-img {
    position: absolute;
    padding: 8px 15px;
    bottom: 20px;
    right: 20px;
    background-color: #fff;
    border-radius: 5px;
    user-select: none;
    cursor: pointer;
    &:hover{
      background-color: ${props => props.theme.color.primaryColor};
      color: #fff;
    }
  }
`
