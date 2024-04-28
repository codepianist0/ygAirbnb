import React, { Suspense } from "react"
import ReactDOM from "react-dom/client"
import App from "./App"

// 样式
import "normalize.css"
import "@/assets/css/index.less"
import theme from "./assets/theme"

import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import store from "./store"
import { ThemeProvider } from "styled-components"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  // <React.StrictMode>
    <Suspense fallback="loading">
      <Provider store={store}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </BrowserRouter>
      </Provider>
    </Suspense>
  // </React.StrictMode>
)
