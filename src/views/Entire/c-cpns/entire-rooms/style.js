import styled from "styled-components"

const RoomsWrapper = styled.div`
  position: relative;
  padding: 30px 20px;
  .title {
    padding-left: 5px;
    font-size: 22px;
    color: ${(props) => props.theme.text.secondColor};
  }
  .roomContext {
    display: flex;
    flex-wrap: wrap;
  }
  .loading-cover {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(255, 255, 255, 0.5);
  }
`
export default RoomsWrapper
