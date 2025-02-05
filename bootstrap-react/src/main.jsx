import "bootstrap/dist/css/bootstrap.min.css"
import "./index.css"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import App from "./App.jsx"
import AppRef from "./AppRef.jsx"
import AppCustomHook from "./AppCustomHook.jsx"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    {/* <AppRef /> */}
    <AppCustomHook />
  </StrictMode>
)
