import React, { memo, Suspense } from "react"
import { useRoutes } from "react-router-dom"
import router from "./router"
import AppHeader from "./components/app-header"
import AppFooter from "./components/app-footer"
import useScrollToTop from "./hooks/useScrollToTop"

const App = memo(() => {
  useScrollToTop()

  return (
    <div className="app">
      <AppHeader />
      <Suspense fallback="loading">
        <div className="content">{useRoutes(router)}</div>
      </Suspense>
      <AppFooter />
    </div>
  )
})

export default App
