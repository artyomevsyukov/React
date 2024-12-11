import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Contacts from "./components/Contacts"
import About from "./components/About"
import NotFound from "./components/NotFound"
import Home from "./components/Home"
import MainLayout from "./layouts/MainLayout"
import Courses from "./components/Courses"
import Course from "./components/Course"
import { courses } from "./data/courses"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index /* index={true} */ element={<Home />} />
            <Route path="*" element={<NotFound />} />
            <Route path="about" element={<About />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="courses" element={<Courses />}>
              <Route index /* index={true} */ element={<Course />} />
              <Route path="react" element={<Course />} />
              <Route path="node" element={<Course />} />
              <Route path="ts" element={<Course />} />
              <Route path="js" element={<Course />} />
            </Route>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
