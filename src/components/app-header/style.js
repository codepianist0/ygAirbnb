import styled from "styled-components"

const HeaderWrapper = styled.div`
  &.fixed {
    z-index: 999;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: ${props => props.theme.isAlpha? "rgba(0,0,0,0)": "#fff"};
  }
  .top {
    display: flex;
    align-items: center;
    height: 80px;
    font-size: 14px;
    border-bottom: 1px solid ${(props) => (props.theme.isAlpha ? "rgba(0, 0, 0, 0)" : "#eee")};
  }
  .search-area-wrapper {
    width: 100%;
    height: ${(props) => (props.isAlpha ? "100px" : "0")};
    background-color: #fff;
    opacity: ${(props) => (props.theme.isAlpha ? "0" : ".5")};
    transition: all .15s ease;
  }
  .content {
    height: 100px;
    transition: all .2s ease;
  }
  .cover {
    position: absolute;
    width: 100%;
    height: ${window.innerHeight - 80 - 100}px;
    background-color: rgba(0, 0,0, .3);
  }
`

export default HeaderWrapper
