import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import "@fortawesome/fontawesome-free/css/all.min.css"
import "./index.css"
import App from "./App.jsx"
// import App from "./App2.jsx"
// import App3 from "./App3.jsx"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
)
