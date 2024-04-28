import styled from 'styled-components'

const TabWrapper = styled.div`
  display: flex;
  margin: 20px 0 10px;
  /* overflow: hidden; */
  
  .tab-item {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 16px;
    padding: 14px 16px;
    min-width: 120px;
    border: 1px solid #D8D8D8;
    border-radius: 4px;
    cursor: pointer;
    box-sizing: border-box;
    &.active {
      color: #fff;
      background-color: ${props => props.theme.color.secondColor};
    }
    ${props => props.theme.mixin.boxShadow}
  }
`

export default TabWrapper