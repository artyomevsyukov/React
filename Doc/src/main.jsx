import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App1 from "./1-test/App.jsx"
import App2 from "./2-accordion/App.jsx"
// import App3 from "./3-messanger/App.jsx"
import App4 from "./4-reducer/App.jsx"
import App5 from "./5-search/App.jsx"
import App6 from "./6-chat/App.jsx"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App1 /> */}
    {/* <App2 /> */}
    {/* <App3 /> */}
    {/* <App4 /> */}
    {/* <App5 /> */}
    <App6 />
  </StrictMode>
)
