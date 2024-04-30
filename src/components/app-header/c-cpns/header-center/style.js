import styled from "styled-components"

const CenterWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  .bar-box {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .detail-search {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 8px;
    height: 48px;
    width: 300px;
    border: 1px solid #ddd;
    border-radius: 40px;
    cursor: pointer;
    box-sizing: border-box;
    ${(props) => props.theme.mixin.boxShadow}
  }
  .span {
    padding: 0 16px;
    font-weight: 600;
    color: ${(props) => props.theme.text.secondColor};
    .span {
      padding: 0 16px;
    }
  }
  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    color: #fff;
    border-radius: 50%;
    background-color: ${(props) => props.theme.color.primaryColor};
  }
  .search-bar-container {
    transform-origin: 50% 0;
  }

  .detail-exit {
    transform: scale(1) translateY(0);
    opacity: 1;
  }

  .detail-exit-active {
    transition: all 250ms ease;
    transform: scale(0.35, 0.727273) translateY(-58px);
    opacity: 0;
  }

  .detail-enter {
    transform: scale(0.35, 0.727273) translateY(-58px);
    opacity: 0;
  }

  .detail-enter-active {
    transform: scale(1) translateY(0);
    opacity: 1;
    transition: all 250ms ease;
  }

  .bar-enter {
    transform: scale(2.85714, 1.375) translateY(58px);
    opacity: 0;
  }

  .bar-enter-active {
    transition: all 250ms ease;
    transform: scale(1) translateY(0) translateX(95px);
    opacity: 1;
  }

  .bar-exit {
    opacity: 0;
  }
`

export default CenterWrapper
