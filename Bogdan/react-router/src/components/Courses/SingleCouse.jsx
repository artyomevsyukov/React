import CN from "classnames"
import { Link, useParams } from "react-router-dom"
import { courses } from "../../data/courses"
import styles from "./Courses.module.css"

function SingleCouse() {
  const params = useParams()
  console.log("params: ", params)
  const course = courses.find((course) => course.slug === params.courseSlug)
  console.log("course: ", course)
  return (
    <div
      //   className={`${styles.coursesWrapper} ${styles.coursesItem}`}
      className={CN(styles.coursesItem, styles.coursesWrapper)}
      key={course.id}>
      <h2>{course.title}</h2>
      <div>{course.slug}</div>
      <div>{course.id}</div>
      {/* <Link to="/courses">All Courses</Link> */}
      <Link to=".." relative="path">
        All Courses
      </Link>
    </div>
  )
}

export default SingleCouse
