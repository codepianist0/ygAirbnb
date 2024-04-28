import React, { memo } from "react"
import FooterWrapper from "./style"
import footerData from "@/assets/data/footer.json"
const AppFooter = memo(() => {
  return (
    <FooterWrapper>
      <div className="footer-content">
        <div className="footer-top">{footerData.map((item) => (
          <div key={item.name} className="box-item">
            <div className="title">{item.name}</div>
            {
              item.list.map(listItem => {
                return (
                  <div key={listItem} className="list">{listItem}</div>
                )
              })
            }
          </div>
          
        ))}</div>
        <div className="footer-bottom">
          <span>© 2022 Airbnb, Inc. All rights reserved.条款 · 隐私政策 · 网站地图 · 全国旅游投诉渠道 12301</span>
        </div>
      </div>
    </FooterWrapper>
  )
})

export default AppFooter
