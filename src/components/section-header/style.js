import styled from 'styled-components'

const HeaderWrapper = styled.div`
  .title {
    margin: 16px 0;
  }
  .subtitle {
    color: ${props => props.theme.text.secondColor};
  }
`

export default HeaderWrapper