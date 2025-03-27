import { useReducer } from "react"
import { Container } from "react-bootstrap"
import "./App.css"

const initialState = {
  slide: 0,
  slideArr: [
    "https://www.planetware.com/photos-large/CHN/china-chengdu-research-base-giant-panda-breeding.jpg",
    "https://www.planetware.com/photos-large/IND/india-top-attractions-taj-mahal.jpg",
    "https://www.planetware.com/photos-large/IND/india-top-attractions-varanasi.jpg",
    "https://www.planetware.com/wpimages/2021/07/australia-top-attractions-kgari-fraser-island-queensland-aerial.jpg",
    "https://www.planetware.com/wpimages/2022/03/japan-tokyo-top-attractions-things-to-do-shinjuku-gyoen-national-garden.jpg",
    "https://www.planetware.com/photos-large/JPN/japan-tokyo-asakusa-senso-ji-temple.jpg",
    "https://www.planetware.com/photos-large/THA/thailand-railay-beach.jpg",
    "https://www.planetware.com/wpimages/2021/05/thailand-top-attractions-beaches-koh-samui.jpg",
  ],
  autoplay: false,
  speed: null,
  inputSpeed: "",
}

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        slide: (state.slide + 1) % state.slideArr.length,
      }
    case "DECREMENT":
      return {
        ...state,
        slide:
          (state.slide - 1 + state.slideArr.length) % state.slideArr.length,
      }
    case "TOGGLE_AUTOPLAY":
      return { ...state, autoplay: !state.autoplay }
    case "FAST":
      return { ...state, speed: 700, autoplay: true }
    case "SLOW":
      return { ...state, speed: 300, autoplay: true }
    case "SET_INPUT_SPEED":
      return { ...state, inputSpeed: action.payload }
    case "APPLY_CUSTOM_SPEED":
      return {
        ...state,
        speed: Number(state.inputSpeed),
        autoplay: true,
        inputSpeed: "",
      }
    default:
      throw new Error("Unsupported action type")
  }
}

const Slider = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <Container>
      <div className="slider-wrapper" style={{ minHeight: "500px" }}>
        <div className="slide-image-container">
          <img
            className="slide-image"
            src={state.slideArr[state.slide]}
            alt={`slide ${state.slide + 1}`}
          />
        </div>

        <div className="controls-panel">
          <div className="slide-info">
            Slide {state.slide + 1} of {state.slideArr.length} <br />
            {state.autoplay ? `autoplay (${state.speed}ms)` : "manual"}
          </div>

          <div className="controls">
            <button onClick={() => dispatch({ type: "DECREMENT" })}>
              Prev
            </button>
            <button onClick={() => dispatch({ type: "INCREMENT" })}>
              Next
            </button>

            <input
              type="number"
              value={state.inputSpeed}
              onChange={(e) =>
                dispatch({ type: "SET_INPUT_SPEED", payload: e.target.value })
              }
              placeholder="Speed (ms)"
            />

            <button onClick={() => dispatch({ type: "TOGGLE_AUTOPLAY" })}>
              {state.autoplay ? "Stop" : "Play"}
            </button>
          </div>
        </div>
      </div>
    </Container>
  )
}

function App() {
  return <Slider />
}

export default App
