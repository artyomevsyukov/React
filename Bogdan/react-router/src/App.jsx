import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Contacts from "./components/Contacts"
import About from "./components/About"
import NotFound from "./components/NotFound"
import Home from "./components/Home"
import MainLayout from "./layouts/MainLayout"
import Courses from "./components/Courses/Courses"
import SingleCouse from "./components/Courses/SingleCouse"
// import Courses from "./components/Courses/Courses"
// import Course from "./components/Courses/Course"
// import { courses } from "./data/courses"
// import MainCourses from "./layouts/MainCourses"
// import CourseTs from "./components/Courses/CourseTs"

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
            <Route path="courses" element={<Courses />} />
            <Route path="courses/:courseSlug" element={<SingleCouse />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
