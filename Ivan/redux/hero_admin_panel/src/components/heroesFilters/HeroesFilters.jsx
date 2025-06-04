// Задача для этого компонента:
// Фильтры должны формироваться на основании загруженных данных
// Фильтры должны отображать только нужных героев при выборе
// Активный фильтр имеет класс active
// Изменять json-файл для удобства МОЖНО!
// Представьте, что вы попросили бэкенд-разработчика об этом
import { useSelector } from "react-redux"
import CN from "classnames"
import { getButtonVariant } from "../../utils/getButtonVariant"
import getElementName from "../../utils/getElementName"
import Spinner from "../spinner/Spinner"
// import { useEffect } from "react"

const HeroesFilters = () => {
  const filters = useSelector((state) => state.filters)
  const filtersLoadingStatus = useSelector(
    (state) => state.filtersLoadingStatus
  )
  // useEffect(() => {
  //   console.log("filters: ", filters)
  // }, [filters])

  console.log("filters: ", filters)

  if (filtersLoadingStatus === "loading") {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Spinner />
      </div>
    )
  } else if (filtersLoadingStatus === "error") {
    return <h5 className="text-center mt-5">Ошибка загрузки</h5>
  }

  return (
    <div className="card shadow-lg mt-4">
      <div className="card-body">
        <p className="card-text">Отфильтруйте героев по элементам</p>
        <div className="btn-group">
          {filters.map((filter) => {
            return (
              <button
                key={filter.id}
                // className={filterClass}>
                className={CN("btn", `btn-${getButtonVariant(filter.name)}`, {
                  active: filter.active === "true",
                })}>
                {getElementName(filter.name)}
              </button>
            )
          })}
          {/* <button className="btn btn-outline-dark active">Все</button>
          <button className="btn btn-danger">Огонь</button>
          <button className="btn btn-primary">Вода</button>
          <button className="btn btn-success">Ветер</button>
          <button className="btn btn-secondary">Земля</button> */}
        </div>
      </div>
    </div>
  )
}

export default HeroesFilters
