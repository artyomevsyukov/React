import { NavLink } from "react-router-dom"
import { courses } from "../data/courses"
import styles from "./Courses.module.css"

function Courses() {
  return (
    <div className={styles.coursesWrapper}>
      {courses.map((course) => {
        return (
          <div className={styles.coursesItem} key={course.id}>
            <NavLink to={course.slug}>
              <h2>{course.title}</h2>
            </NavLink>
            <div>{course.slug}</div>
            <div>{course.id}</div>
          </div>
        )
      })}
    </div>
  )
}

export default Courses
