import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./style/style.scss"
import App2 from "./components/app/App2"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App2 />
  </StrictMode>
)
