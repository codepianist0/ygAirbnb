import styled from "styled-components"

export const PictureBrowSerWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #222;
  .top {
    position: relative;
    height: 86px;
    .icon {
      position: absolute;
      top: 25px;
      right: 25px;
    }
  }
  .p-content {
    flex: 1;
    position: relative;
    display: flex;
    justify-content: center;
    color: #fff;
    .control {
      z-index: 9;
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 10px;
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      .c-item {
        cursor: pointer;
      }
    }
    .p-picture {
      position: relative;
      width: 100%;
      max-width: 105vh;
      height: 100%;
      overflow: hidden;
      img {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: 0 auto;
        height: 100%;
        object-fit: cover;
        user-select: none;
      }
      /* 动画 */
      .change-img-enter, .change-img-appear {
        opacity: 0;
      }
      .change-img-enter-active, .change-img-appear-active {
        opacity: 1;
        transition: all 1000ms ease;
      }
      .change-img-exit {
        opacity: 1;
      }
      .change-img-exit-active {
        opacity: 0;
        transition: all 1000ms ease;
      }
    }
  }
  .r-footer {
    display: flex;
    justify-content: center;
    margin-top: 10px;
    height: 100px;
    .review {
      max-width: 105vh;
      overflow: hidden;
      .r-info {
        margin-bottom: 5px;
        color: #fff
      }
      .r-imgs {
        width: 100%;
        .r-box {
          width: 14.285%;
          img {
            height: 67px;
            opacity: .5;
            cursor: pointer;
            &.active{
              opacity: 1;
            }
          }
        }
      }
    }
  }
`
