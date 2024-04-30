import styled from "styled-components"

const RightWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  padding-right: 24px;
  height: 42px;
  font-weight: 600;
  .btns {
    display: flex;
    .item {
      padding: 12px 15px;
      border-radius: 20px;
      color: ${(props) => (props.theme.isAlpha ? "#fff" : "#484848")};
      cursor: pointer;
      &:hover {
        background-color: ${(props) => (props.theme.isAlpha ? "rgba(255, 255, 255, .1)" : "f4f4f4")};
      }
    }
  }
  .profile {
    position: relative;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 75px;
    border: 1px solid #ccc;
    border-radius: 20px;
    cursor: pointer;
    background-color: ${(props) => (props.theme.isAlpha ? "#fff" : "rgba(0,0,0,0)")};

    ${(props) => props.theme.mixin.boxShadow};
    .panel {
      position: absolute;
      display: flex;
      flex-direction: column;
      top: 50px;
      right: 5px;
      width: 240px;
      background-color: #fff;
      border: 1px solid #f3f3f3;
      border-radius: 20px;
      box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
      color: #666;
      .p-top {
        padding: 10px 0;
        border-bottom: 1px solid #ddd;
      }
      .bottom {
        padding: 10px, 0;
      }
      .item {
        padding: 0 16px;
        height: 40px;
        line-height: 40px;
        user-select: none;
        &:hover {
          background-color: #f5f5f5;
        }
      }
    }
  }
`

export default RightWrapper
