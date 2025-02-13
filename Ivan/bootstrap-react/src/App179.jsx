import { useState } from "react"
import { Container } from "react-bootstrap"

import "./App.css"

const Slider = () => {
  const [slide, setSlide] = useState(0)
  const [autoplay, setAutoplay] = useState(false)

  function changeSlide(i) {
    setSlide((slide) => slide + i)
  }

  return (
    <Container>
      <div className="slider w-50 m-auto">
        <img
          className="d-block w-100"
          src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
          alt="slide"
        />

        <div className="buttons mt-3">
          <button
            className="btn btn-primary me-2"
            onClick={() => changeSlide(-1)}>
            -1
          </button>
          <button
            className="btn btn-primary me-2"
            onClick={() => changeSlide(1)}>
            +1
          </button>
          <button
            className="btn btn-primary me-2"
            onClick={() => setAutoplay(!autoplay)}>
            toggle autoplay
          </button>
          <div className="text-center mt-5 fs-2">
            Active slide {slide} <br />
            {autoplay ? "auto" : null}{" "}
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
