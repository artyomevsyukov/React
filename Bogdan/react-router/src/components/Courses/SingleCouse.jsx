import CN from "classnames"
import { useEffect } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { courses } from "../../data/courses"
import styles from "./Courses.module.css"
// import NotFound from "../NotFound"

function SingleCouse() {
  const params = useParams()
  // const { courseSlug } = useParams() // Получаем значение courseSlug из URL
  // console.log("params: ", params)
  const navigate = useNavigate()
  const course = courses.find((course) => course.slug === params.courseSlug)
  // console.log("course: ", course)

  // Показывает Not Found и ссылку на все курсы
  // if (!course) {
  //   return (
  //     <>
  //       <NotFound />
  //       <Link to=".." relative="path">
  //         All Courses
  //       </Link>
  //     </>
  //   )
  // }

  useEffect(() => {
    if (!course) {
      navigate("..", { relative: "path" })
    }
  }, [course, navigate])

  return (
    <div
      //   className={`${styles.coursesWrapper} ${styles.coursesItem}`}
      className={CN(styles.coursesItem, styles.coursesWrapper)}>
      <h2>{course?.title}</h2>
      <div>{course?.slug}</div>
      <div>{course?.id}</div>
      {/* <Link to="/courses">All Courses</Link> */}
      <Link to=".." relative="path">
        All Courses
      </Link>
      {/*  relative="path" Перходим на один уровень выше текущего пути иначе перешли бы к '/' */}
    </div>
  )
}

export default SingleCouse
