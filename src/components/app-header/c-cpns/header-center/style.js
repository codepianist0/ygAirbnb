import styled from 'styled-components'

const CenterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8px;
  height: 48px;
  width: 300px;
  border: 1px solid #ddd;
  border-radius: 40px;
  cursor: pointer;
  ${props => props.theme.mixin.boxShadow}
  .left {
    font-weight: 600;
    color: ${props => props.theme.text.secondColor};
    .span {
      padding: 0 16px;
    }
  }
  .right {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    color: #fff;
    border-radius: 50%;
    background-color: ${props => props.theme.color.primaryColor};
    
  }
`

export default CenterWrapper