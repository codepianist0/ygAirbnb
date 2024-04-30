import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"

// 样式
import "normalize.css"
import "@/assets/css/index.less"
import theme from "./assets/theme"

import { HashRouter } from "react-router-dom"
import { Provider } from "react-redux"
import store from "./store"
import { ThemeProvider } from "styled-components"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  // <React.StrictMode>
      <Provider store={store}>
        <HashRouter>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </HashRouter>
      </Provider>
  // </React.StrictMode>
)
