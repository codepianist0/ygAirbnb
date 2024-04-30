import styled from "styled-components"

const IndicatorWrapper = styled.div`
  overflow: hidden;
  .i-content {
    position: relative;
    display: flex;
    transition: all .2s ease;

    > * {
      flex-shrink: 0;
    }
  }
`

export default IndicatorWrapper
