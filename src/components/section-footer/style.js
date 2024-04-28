import styled from 'styled-components'

const FooterWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  .more {
    font-size: 17px;
    font-weight: 700;
    /* color: #000; */
    color: ${props => {
      if (props.hasName) {
        return props.theme.color.secondColor
      } else {
        return "#000"
      }
    }};
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
    .more-text {
      margin-right: 5px;
    }
  }

`

export default FooterWrapper