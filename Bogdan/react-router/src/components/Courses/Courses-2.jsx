import { NavLink, useLocation, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import queryString from "query-string"
import { courses } from "../../data/courses"
import styles from "./Courses.module.css"

// Функция для сортировки
function compareCourses(a, b, search) {
  if (a[search] > b[search]) return 1
  if (a[search] === b[search]) return 0
  if (a[search] < b[search]) return -1
}

function Courses() {
  const [title, setTitle] = useState("Courses")
  const [sortedCourses, setSortedCourses] = useState(courses) // Создаем состояние для сортированного списка
  const navigate = useNavigate()
  const location = useLocation()
  const query = queryString.parse(location.search)
  // sort=id&filter=res
  console.log("location: ", location)
  console.log("query: ", query)

  useEffect(() => {
    // Проверяем, указан ли параметр sort
    if (query.sort) {
      // Проверяем, существует ли поле sort в массиве объектов
      const isValidSortField = Object.keys(courses[0]).includes(query.sort)

      if (!isValidSortField) {
        // Если такого поля нет, перенаправляем
        navigate("../courses", { relative: "path" })
      } else {
        // Если поле существует, сортируем массив
        setTitle(`Courses sorted by ${query.sort}`)
        const sorted = [...courses].sort((a, b) =>
          compareCourses(a, b, query.sort)
        )
        setSortedCourses(sorted)
      }
    } else {
      // Если параметр sort отсутствует, сбрасываем список
      setTitle("Courses")
      setSortedCourses(courses)
      navigate("../courses", { relative: "path" })
    }
  }, [query.sort, navigate])

  return (
    <div className={styles.coursesWrapper}>
      <h2>{title}</h2>
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
