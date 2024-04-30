import styled from 'styled-components'

export const TabWrapper = styled.div`
  position: relative;
  height: 48px;
  will-change: transform, opacity;
  .tab-box {
    display: flex;
    justify-content: center;
    .tab-item {
      margin: 12px 16px;
      font-size: 16px;
      color: ${props => props.theme.isAlpha? "#fff": props.theme.text.secondColor};
      .text {
        cursor: pointer;
      }
      .under-line {
        position: relative;
        left: 50%;
        right: 50%;
        margin-top: 10px;
        width: 0;
        height: 2px;
        background-color: ${(props) => (props.theme.isAlpha ? "#fff" : "#333")};
        transition: all .2s ease;
        &.active {
          left: 0;
          right: 0;
          width: 100%;
        }
      }
    }
  }
  .tab-content {
    position: absolute;
    top: 80px;
    left: 50%;
    transform: translateX(-50%);
    width: 850px;
    height: 66px;
  }
`