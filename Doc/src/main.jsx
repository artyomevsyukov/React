import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App1 from "./1-test/App.jsx"
import App2 from "./2-accordion/App.jsx"
import App3 from "./3-messanger/App.jsx"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App3 />
  </StrictMode>
)
