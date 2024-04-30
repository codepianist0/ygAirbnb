import styled from "styled-components"

const LeftWrapper = styled.div`
  flex: 1;
  display: flex;
  margin-left: 24px;
  color: ${props => props.theme.isAlpha? "#fff": props.theme.color.primaryColor};
  .logo {
    cursor: pointer;
  }
`

export default LeftWrapper
