import styled from "styled-components"

const FooterWrapper = styled.div`
  margin-top: 100px;
  padding: 48px 24px;
  height: 320px;
  border-top: 1px solid #ebebeb;
  font-size: 14px;

  .footer-content {
    .footer-top {
      justify-content: space-around;
      display: flex;
      width: 100%;
      .title {
        color: #484848;
        font-weight: 700;
        margin-bottom: 16px;
      }
      .list {
        margin-top: 10px;
        color: #767676;
        &:hover {
          text-decoration: underline;
          cursor: pointer;
        }
      }
    }
    .footer-bottom {
      margin-top: 30px;
      padding-top: 20px;
      text-align: center;
      color: #747474;
      border-top: 1px solid #ebebeb;
    }
  }
`
export default FooterWrapper
