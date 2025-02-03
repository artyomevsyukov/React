import "bootstrap/dist/css/bootstrap.min.css"
import "./index.css"
import App from "./App.jsx"

import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import AppRef from "./AppRef.jsx"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <AppRef />
  </StrictMode>
)
