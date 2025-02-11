import { createRoot } from "react-dom/client"
import { StrictMode } from "react"

import "./index.css"
import App from "./App"
// import "bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
)
