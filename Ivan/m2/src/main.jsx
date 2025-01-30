import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./style/style.scss"
import App from "./components/app/App"
import MarvelService from "./services/MarverService"

const marvelService = new MarvelService()

marvelService
  .getAllCharacters()
  // .then((res) => console.log(res))
  .then((res) => res.data.results.forEach((item) => console.log(item.name)))

marvelService
  .getCharacter(1011052)
  // .then((res) => console.log(res))
  .then((res) => res.data.results.forEach((item) => console.log(item.name)))

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
)
