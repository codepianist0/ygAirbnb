import styled from "styled-components"

export const SectionWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  border: 1px solid #ddd;
  border-radius: 33px;
  background-color: ${(props) => (props.theme.isAlpha ? "#fff" : "rgba(0,0,0,0)")};
  .item {
    position: relative;
    flex: 1;
    display: flex;
    align-items: center;
    height: 100%;
    cursor: pointer;
    .info {
      flex: 1;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      border-radius: 33px;
      &:hover {
        background-color: #eee;
      }
      .title {
        font-weight: 700;
        font-size: 12px;
        color: ${(props) => props.theme.text.secondColor};
      }
      .desc {
        margin-top: 2px;
        font-size: 14px;
        color: #666;
      }
    }
    .parting-line {
      width: 2px;
      height: 32px;
      background-color: #ddd;
    }
  }
`
