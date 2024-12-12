import { NavLink, useLocation, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import queryString from "query-string"
import { courses } from "../../data/courses"
import styles from "./Courses.module.css"

// ME создать массив динамически
const SORT_KEYS = ["title", "id", "slug"]

function sortCourses(courses, key) {
  if (!key || SORT_KEYS.includes(key)) {
    return [...courses]
  }
  return [...courses].sort((a, b) => (a[key] > b[key] ? 1 : -1))
}

function Courses() {
  const navigate = useNavigate()
  const location = useLocation()
  const query = queryString.parse(location.search)
  const [sortKey, setSortKey] = useState(query.sort)
  console.log("sortKey: ", sortKey)
  // const sorted = sortCourses(courses, sortKey)
  const [sortedCourses, setSortedCourses] = useState(
    sortCourses(courses, sortKey)
  )

  // useEffect(() => {
  //   if (!SORT_KEYS.includes(sortKey)) {
  //     navigate(".")
  //     // setSortKey()
  //   }
  // }, [sortKey, navigate])

  // useEffect(() => {
  //   // Проверяем, указан ли параметр sort
  //   if (query.sort) {
  //     // Проверяем, существует ли поле sort в массиве объектов
  //     const isValidSortField = Object.keys(courses[0]).includes(query.sort)

  //     if (!isValidSortField) {
  //       // Если такого поля нет, перенаправляем
  //       navigate("../courses", { relative: "path" })
  //     } else {
  //       // Если поле существует, сортируем массив
  //       setTitle(`Courses sorted by ${query.sort}`)
  //       const sorted = [...courses].sort((a, b) =>
  //         compareCourses(a, b, query.sort)
  //       )
  //       setSortedCourses(sorted)
  //     }
  //   } else {
  //     // Если параметр sort отсутствует, сбрасываем список
  //     setTitle("Courses")
  //     setSortedCourses(courses)
  //     navigate("../courses", { relative: "path" })
  //   }
  // }, [query.sort, navigate])

  return (
    <div className={styles.coursesWrapper}>
      <h2>{sortKey ? `Courses sorted by ${sortKey}` : "Courses"}</h2>
      {sortedCourses.map((course) => (
        <div className={styles.coursesItem} key={course.id}>
          <NavLink to={course.slug}>
            <h2>{course.title}</h2>
            <p>ID: {course.id}</p>
          </NavLink>
        </div>
      ))}
    </div>
  )
}

export default Courses
